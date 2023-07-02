import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
public userProfies:any
typeData:any
timeout:boolean = true;
typeShow:string = "ทั้งหมด" 

  constructor() { }

  ngOnInit(): void {
    this.typeData = ["กิจจกรรมมสังคม","ส่งเสริมสุขภาพ","ประจำวัน"]
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 1500);
     this.userProfies = [
      {
        name:'Pannatab Saman',
        timestamp:'11/01/63 15:50',
        type :'กิจจกรรมมสังคม',
        image:'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
        title:'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
        detail:"Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
        heart: 1
       },
      {
        name:'Pannatas Saman',
        timestamp:'22/03/63 5:35',
        type :'ส่งเสริมสุขภาพ',
        image:'https://lh3.googleusercontent.com/ZhuELeZJqacONyJKxGXOZ2EJ2fgf7_8oFvFvzhTwnZ4SYyO5QaF0zLwgVhSC7E0=w600',
        title:'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
        detail:"r กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
        heart: 0
       },
      {
        name:'Pannatab Saman',
        timestamp:'11/01/63 15:50',
        type :'กิจจกรรมมสังคม',
        image:'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
        title:'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
        detail:"Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
        heart: 0
       },
      {
        name:'Pannatas Saman',
        timestamp:'22/03/63 5:35',
        type :'กิจจกรรมมสังคม',
        image:'https://lh3.googleusercontent.com/ZhuELeZJqacONyJKxGXOZ2EJ2fgf7_8oFvFvzhTwnZ4SYyO5QaF0zLwgVhSC7E0=w600',
        title:'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
        detail:"r กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
        heart: 1
       },
      {
        name:'Pannatap Saman',
        timestamp:'27/04/63 12:50',
        type :'ประจำวัน',
        image:'https://www.appsheet.com/image/getimageurl?appName=NJY_NuresingHome_new-777845&tableName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA&fileName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA_Images%2F37e51b6c.%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99.103107.jpg&appVersion=8.000138&signature=0fcd6191f226a9dca5864de5cb3b76b488e67b14c6bc466371e520e376ce9614&width=600',
        title:'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
        detail:"สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
        heart: 0
       }
    ]
    console.log('userProfies',this.userProfies);
    
  }

  byPassImg(){
      return "https://www.appsheet.com/image/getimageurl?appName=NJY_NuresingHome_new-777845&amp;tableName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA&amp;fileName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA_Images%2Fa886cac2.%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99.053954.jpg&amp;appVersion=8.000138&amp;signature=63c8b90dddffbd7ef77a097fa750c89ddacd0351a62d50fbeaddd7153e5e7627&amp;width=600"
    }

    selectType(item:string){
      console.log('Select',item);
      if(item !== this.typeShow){
        this.timeout = true
        this.typeShow = item 
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.timeout = false;
      }, 1000);
     }
    }  
}
