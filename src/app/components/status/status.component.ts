import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
   const interval =  setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999
      if(rnd < 0.5){
        this.currentStatus = 'online'
      }else if(rnd < 0.9){
        this.currentStatus = 'offline'
      }else{       
        this.currentStatus = 'unknown'
      }
    }, 5000)
    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })

  }

}
