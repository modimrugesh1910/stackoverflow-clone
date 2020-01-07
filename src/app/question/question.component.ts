import {
    AfterViewInit,
    Component,
    OnInit,
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {QuestionService} from './question.service';
import * as moment from 'moment';

@Component({
    selector: 'app-question-table',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})

export class QuestionComponent implements OnInit, AfterViewInit {
    dataSource = [
        {
            'title': `script ssh of configure of unique host`,
            'subtitle': `i do a script to configure hostname by ssh communication USERNAME=root HOSTS=/home/Document/host.txt 
            SCRIPT="hostnamectl set-hostname aflinux; useradd aflinux; echo 'Confi OK for ...`,
            'tag': ['ssh'],
            'time': 'asked 1 mins ago',
            'auther': 'Catsunami',
            'votes': 5,
            'answers': 20,
            'views': 100
        }, {
            'title': `Visual Studio 2017: Invalid option '8.0' for /langversion. Use '/langversion:?' to
                        list supported values`,
            'subtitle': `I am getting following compilation error. It's a console application. Error
                        CS1617 Invalid option '8.0' for /langversion. Use '/langversion:?' to list supported values.
                        Visual Studio Version: 15....`,
            'tag': ['Java', 'C#'],
            'time': 'asked 41 secs ago',
            'auther': 'winnie',
            'votes': 1,
            'answers': 10,
            'views': 50
        }, {
            'title': `Tracking function in OpenCV`,
            'subtitle': `I'm working on application based on OpenCV to counting cars on highway from youtube video, 
            but i can't get what is wrong with counting function. I'm trying to modificate program from this tutorial: ...`,
            'tag': ['python', 'opencv', 'yolo'],
            'time': 'asked 5 mins ago',
            'auther': 'Olocalt',
            'votes': 0,
            'answers': 0,
            'views': 5
        },
    ];

    constructor(private readonly questionService: QuestionService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.questionService.fetchData().subscribe(
            (data) => {
                this.dataSource = data.items;
            }
        );
    }

    getTime(time) {
        return moment(time).startOf('day').fromNow();
    }
}

