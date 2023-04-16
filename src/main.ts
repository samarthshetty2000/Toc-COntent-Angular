import 'zone.js/dist/zone';
import { Component , HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="data">

<section>
Toc
<div (click)='onClick("id1")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id1'}">Heading 1</div>
<div (click)='onClick("id2")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id2'}">Heading 2</div>
<div (click)='onClick("id3")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id3'}">Heading 3</div>
<div (click)='onClick("id4")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id4'}">Heading 4</div>
<div (click)='onClick("id5")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id5'}">Heading 5</div>
<div (click)='onClick("id6")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id6'}">Heading 6</div>
<div (click)='onClick("id7")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id7'}">Heading 7</div>
<div (click)='onClick("id8")' [ngClass]="{'toc-child-selected' : currentActiveH2Section === 'id8'}"> Heading 8</div>
</section>
<section class='content' (scroll)='scrolled($event)'>
      <h2 id="id1">Hello from id1</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.””</section>
   <h2 id="id2">Hello from id2</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id3">Hello from id3</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id4">Hello from id4</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id5">Hello from id5</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id6">Hello from id6</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id7">Hello from id7</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”</section>
   <h2 id="id8">Hello from id8</h2>
   <section>Anyone who has ever chucked a tennis ball in the general vicinity of a border collie knows that some animals take play very seriously. The intense stare, the tremble of anticipation, the apparent joy with every bounce, all in pursuit of inedible prey that tastes like the backyard. Dogs are far from the only animals that devote considerable time and energy to play. Juvenile wasps wrestle with hive mates, otters toss rocks between their paws, and human children around the world go to great lengths to avoid make-believe lava on the living room floor.

   When a dog chases a ball or a child adjudicates relationship disputes in doll-land, something important and meaningful is clearly happening in their minds, says Laura Schulz, a cognitive scientist at the Massachusetts Institute of Technology in Cambridge. “Play has a lot of peculiar and fascinating properties,” she says. “It’s totally fundamental to learning and human intelligence.”

   </section>

   </section>
  `
})
export class App {
  currentActiveH2Section="id1"
  name = 'Angular';
  userScroll:boolean=true;
  @HostListener('window:scroll', ['$event']) 

  ngOninit(){
     this.addObserverToH2Elements();
  }
scrollObserver: IntersectionObserver;
  onClick(id) {
    const el = document.getElementById(id);
    this.userScroll=false
    el.scrollIntoView({ behavior: 'smooth' });
    this.currentActiveH2Section=id
   
  }
  scrolled(event:Event)
  {
   
    // const el=document.getElementsByTagName("H2")
    if ( event instanceof WheelEvent)
    {
      console.log("hello")
      // console.log(this.userScroll)
     this.addObserverToH2Elements();
      // console.log(this.userScroll)
    }
  
    
 
  }
  addObserverToH2Elements() {
    // if (!this.reportHtmlContent) return;
    let options = {
      root: null,
      rootMargin: '50% 0px -50% 0px',
      threshold: 1
    };
    this.scrollObserver = new IntersectionObserver(this.interSectionCallBack.bind(this), options);
    const allHtmlH2Tags = document.getElementsByTagName('h2');
    Array.from(allHtmlH2Tags).forEach(element => { 
      let htmlType= element as HTMLElement;
      this.scrollObserver.observe(htmlType);
     
    });

  
  }

  interSectionCallBack(changes) {
    let topmostIndex = -1;
    let id:any=null;
    changes.forEach((change,index) => {
      if (change.intersectionRatio > 0 &&  topmostIndex=== -1) {   
        topmostIndex = index;
        id = change.target.id;
        console.log(change.target.id)
        this.scrollObserver=null
      }
     
    })

    if (topmostIndex !== -1) {
      this.currentActiveH2Section=id
    }

  }
}

bootstrapApplication(App);
