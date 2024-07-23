import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { GuardianPortalService } from '../guardian-portal.service';
import { AgChartsAngular } from "ag-charts-angular";
import { AgChartOptions, AgCharts } from "ag-charts-community";

@Component({
  selector: 'app-view-progress',
  templateUrl: './view-progress.component.html',
  styleUrls: ['./view-progress.component.css']
})
export class ViewProgressComponent {

  constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private GuardianPortalService:GuardianPortalService) 
  {

  }

  progressData!:any
  progressDataForCharts!:any
  // progressDataForCardMatchEasy = new Map<any, any>();

  public CardMatchEasyProgressArrayOfOptions: AgChartOptions = {}
  public CardMatchMediumProgressArrayOfOptions: AgChartOptions = {}
  public CardMatchHardProgressArrayOfOptions: AgChartOptions = {}
  public PatternRecognitionEasyProgressArrayOfOptions: AgChartOptions = {}
  public PatternRecognitionMediumProgressArrayOfOptions: AgChartOptions = {}
  public PatternRecognitionHardProgressArrayOfOptions: AgChartOptions = {}

  ngOnInit(): void 
{
  this.GuardianPortalService.getProgress(this.cookieService.get('user_id')).subscribe((data: any) =>
    {
     this.progressData = data;
   });


   this.GuardianPortalService.getProgressDataForCharts(this.cookieService.get('user_id')).subscribe((data: any) =>
    {
     this.progressDataForCharts = data;
     console.log('Printing the data: ')
     console.log(this.progressDataForCharts)
     const CardMatchEasyProgressArray = [
      { name: 'Won', value: this.progressDataForCharts[0].TimesWon || 0},
      { name: 'Lost', value: this.progressDataForCharts[0].TimesLost || 0 }
    ];
    const CardMatchMediumProgressArray = [
      { name: 'Won', value: this.progressDataForCharts[1].TimesWon || 0},
      { name: 'Lost', value: this.progressDataForCharts[1].TimesLost || 0}
    ];
    const CardMatchHardProgressArray = [
      { name: 'Won', value: (this.progressDataForCharts[2]?.TimesWon || 0) },
      { name: 'Lost', value: (this.progressDataForCharts[2]?.TimesLost || 0) }
    ];
    const PatternRecognitionEasyProgressArray = [
      { name: 'Won', value: this.progressDataForCharts[3]?.TimesWon || 0},
      { name: 'Lost', value: this.progressDataForCharts[3]?.TimesLost || 0 }
    ];
    const PatternRecognitionMediumProgressArray = [
      { name: 'Won', value: this.progressDataForCharts[4]?.TimesWon || 0},
      { name: 'Lost', value: this.progressDataForCharts[4]?.TimesLost || 0}
    ];  const PatternRecognitionHardProgressArray = [
      { name: 'Won', value: this.progressDataForCharts[5]?.TimesWon || 0},
      { name: 'Lost', value: this.progressDataForCharts[5]?.TimesLost || 0}
      
    ];

    console.log(CardMatchEasyProgressArray)
     this.createPieChartCardMatchEasy(CardMatchEasyProgressArray);
     this.createPieChartCardMatchMedium(CardMatchMediumProgressArray);
     this.createPieChartCardMatchHard(CardMatchHardProgressArray);
     this.createPieChartPatternRecognitionEasy(PatternRecognitionEasyProgressArray);
     this.createPieChartPatternRecognitionMedium(PatternRecognitionMediumProgressArray);
     this.createPieChartPatternRecognitionHard(PatternRecognitionHardProgressArray);

   });

  //  this.progressDataForCardMatchEasy.set("Won",this.progressDataForCharts[0].TimesWon)
  //  this.progressDataForCardMatchEasy.set("Lost",this.progressDataForCharts[0].TimesLost)


}


createPieChartCardMatchEasy(progressDataArray:any): void {
  this.CardMatchEasyProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Card Match Level Easy ',
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}

createPieChartCardMatchMedium(progressDataArray:any): void {
  this.CardMatchMediumProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Card Match Level Medium ',
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}
createPieChartCardMatchHard(progressDataArray:any): void {
  this.CardMatchHardProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Card Match Level Hard ',
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}
createPieChartPatternRecognitionEasy(progressDataArray:any): void {
  this.PatternRecognitionEasyProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Pattern Recognition Level Easy ',
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}
createPieChartPatternRecognitionMedium(progressDataArray:any): void {
  this.PatternRecognitionMediumProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Pattern Recognition Level Medium ',
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}
createPieChartPatternRecognitionHard(progressDataArray:any): void {
  this.PatternRecognitionHardProgressArrayOfOptions = {
    data: progressDataArray,
    title: {
      text: 'Pattern Recognition Level Hard '
    },
    series: [{ type: 'pie', angleKey: 'value', legendItemKey:'name'}],
  };
}


}

  


 