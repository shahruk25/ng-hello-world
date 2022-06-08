import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector : 'courses',
    template : `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                    <button class="btn btn-primary" [class.active]="isActive">SAVE</button> <!--class binding from property binding-->
                    <div (click)="onDivClick()"> <!-- TO Learn Event bubbling-->
                        <button class="btn btn-success" (click)="onSave($event)">This to learn event</button> <!--class binding from property binding-->
                    </div>    
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
}