import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector : 'courses',
    template : `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                    <button class="btn btn-primary" [class.active]="isActive">SAVE</button> <!--class binding from property binding-->
                    <li>
                    <div (click)="onDivClick()"> <!-- TO Learn Event bubbling-->
                        <button class="btn btn-success" (click)="onSave($event)">This to learn event</button> <!--class binding from property binding-->
                        <input (keyup.enter) = "onKeyUp($event)"> <!--keyup event--><br>
                        <span class="label label-default">#Email Template_variable</span>
                        <input #email (keyup.enter) = "onKeyUpEmail(email)"> <!--Template_variable = "email" example-->
                        <br>
                        <span class="label label-default">property biding problem</span>
                        <input [value]="domain" (keyup.enter)="onKeyUpEmail2()"/> <!--property biding problem its from component ===> view ,
                                                                                                 even if add new value to input it will not update the console we print; so we need 2 way binding-->
                        <br>
                        <span class="label label-default">2 way biding</span>
                        <input [(ngModel)]="username" (keyup.enter)="twoWayBinding()"/>
                    </div>     
                    </li>
                    <li>
                        {{courseDetails.title | uppercase}}
                    </li>
                    <li>
                        {{courseDetails.rating | number:'1.1-1'}}
                    </li>
                    <li>
                        {{courseDetails.students | number}}
                    </li>
                    <li>
                        {{courseDetails.price | currency : 'CAD'}}
                    </li>
                    <li>
                        {{courseDetails.students | date:'shortDate'}}
                    </li>
                    <!-- Create custom pipe called "summary"-->
                    <li>
                        {{text | summary : 100}}
                    </li>
                </ul>
                <!-- <img src="{{imageURL}}"/>  interpolation-->
                <img [src]="imageURL"/> <!-- property binding mean biding property to DOM -->
            
    `
})

export class CoursesComponent{
    title ="List of Courses";   
    courses; 
    imageURL = "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    isActive = true;
    domain = "techMonkey.io";
    username = "techMonkey";

    //course object to learn pipes
    courseDetails = {
        title  : "The complete Angular Course",
        rating : 4.9745,
        students: 30123,
        price  :190.95,
        releaseDate:  new Date(2016,3,1)
    };

    // custom pipe example
    text = `Build at: 2022-06-11T09:03:43.087Z - Hash: fb2981692770b755a4cd - Time: 703ms
    ✔ Browser application bundle generation complete.
    Initial Chunk Files | Names |     Size
    main.js             | main  | 20.80 kB`;


    constructor(service : CoursesService){
        this.courses = service.getCourses();
    }

    onSave(event:Event){
        // event.stopPropagation();
        console.log("Event btn clicked",event);
    }

    onDivClick(){
        console.log("Event on DIVV");
    }
    
    onKeyUp(email:any){
        console.log("Enter was pressed",email);
    }

    onKeyUpEmail(email:any){
        console.log("Enter was pressed",email.value);
    }

    onKeyUpEmail2(){
        console.log(this.domain);
    }

    twoWayBinding(){
        console.log(this.username);
    }
    
}