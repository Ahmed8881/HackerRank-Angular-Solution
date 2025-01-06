import { Component, Input } from '@angular/core';
import { Survey } from '../types/Survey';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.scss'
})
export class SurveyListComponent {
  @Input() surveyList!: Survey[];


}
