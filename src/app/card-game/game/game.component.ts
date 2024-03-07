import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent

  {


    constructor(private router:Router,private cookieservice:CookieService)
    {
    
    }
    
  
    noOfCards=12;
    colors!:string[];
    selectedColor:string[]=[];
    myMap = new Map();
    selectedObjects3:any[]=[];
    isDisable:boolean=false;

    // for toast
    show:boolean=true;

    pairLeft:number=this.noOfCards/2;



      
    points:number=0;
    pointScored:number=0;
    count:number=0;
    cardsArr:any[] = [];
    selectedCard: number | null = null;
    notEqual:number=0;
    totalClicks:number=0;
  
  
    
  
    ngOnInit(): void 
    {
      this.generateColor(this.noOfCards/2);
    }
  
    generateColor(reqColors:number):void
    {
      this.colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#ff6600', '#9900cc', '#cc00cc', '#0099cc', '#009900', '#ff0099'];
      const numbersUsed: Set<number> = new Set();
      for(let i=0;i<reqColors;i++){
        let index = Math.floor(Math.random()*this.colors.length);
        if(!numbersUsed.has(index)){
          numbersUsed.add(index);
          this.selectedColor[i]=this.colors[index];
        } 
      }
      for(let i=0;i<reqColors;i++){
        this.myMap.set(this.selectedColor[i], 0);
      }
      console.log(this.selectedColor);
      console.log(this.myMap);
      this.selectedObjects3=this.generateObject(this.selectedColor);
      console.log(this.selectedObjects3);
    }
    
    generateObject(selectedColor:string[]):any[]{
      const formedObject:any[]=[];
      let n=this.noOfCards;
      let i=0;
      while(i<n){
        let index = Math.floor(Math.random()*n/2);
        let key = selectedColor[index]
        if(this.myMap.has(key)==true && this.myMap.get(key)<2){
          formedObject.push({number:i,color:selectedColor[index],isSelected:false});
          this.myMap.set(key,(this.myMap.get(key))+1);
          i++;
        }
        
      }
      return formedObject;
    }
  

  
  
  onCardClick(card: any): void 
  {
    this.count =this.count+1;
    this.cardsArr.push(card);
    console.log(`Clicked on card ${card.number} and  ${card.color}`);
    this.selectedCard = card.number;
    card.isSelected = true; // Toggle the isSelected property
  
    if(this.count%2==0)
    {
      setTimeout(()=>{
        this.check(0,1)
      }, 500);  
    }
  }
  check(i:number, j:number):void
  {
    this.totalClicks+=1;  
    if(this.cardsArr[0].color!=this.cardsArr[1].color){
      console.log("Not equal")
      this.notEqual+=1;
      
  
  
      this.cardsArr[i].isSelected=false;
      this.cardsArr[j].isSelected=false;
    }
    else{
      console.log("Equals");
      this.points+=1;
      this.pairLeft-=1;
  
      if(this.points==this.noOfCards/2){
        this.totalScore();
      }
  
    }
    console.log("Printing score card");
    console.log(this.pairLeft);
    console.log(this.points);
    console.log(this.totalClicks);
  
  
  
    this.cardsArr=[];
  
  }
    totalScore():void{
      this.pointScored = Math.ceil((this.noOfCards/this.count)*10);
      console.log(`Thus Your total Score is `+this.pointScored);
      console.log(`Thus notEqual is `+this.notEqual);
      console.log(`Thus totalClicks is `+this.totalClicks);
    }
  
  
  


    onQuitClick():void
    {
      this.router.navigate(["/quit"])



    }
  
  
  }
  
  