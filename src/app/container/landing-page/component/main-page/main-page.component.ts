import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';
declare let window: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  public userProfies:any = []
  typeData: any
  timeout: boolean = true;
  typeShow: string = "ทั้งหมด"
  showToTop: boolean = true;
  intervalId: any
  Image:any
  userDetail:any
  constructor(
    private WorkService:WorkDatabaseService
  ) { }

  ngOnInit(): void {
    this.typeData = ["กิจจกรรมมสังคม", "ส่งเสริมสุขภาพ", "ประจำวัน"]
    this.queryData()

    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
      this.checkScroll()
    }, 500);
    // console.log('userProfies', this.userProfies);
  }

  scrollToTop() {
    this.showToTop = false;
    if (this.scrollContainer && this.scrollContainer.nativeElement.scrollTop) {
      this.scrollContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollTop - 50
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.scrollToTop()
      }, 10);
    }
  }

  checkScroll() {
    this.intervalId = setInterval(() => {
      if (this.scrollContainer && this.scrollContainer.nativeElement.scrollTop > 1000) {
        // clearInterval(this.intervalId);
        console.log(this.scrollContainer.nativeElement.scrollTop, " >=", this.scrollContainer.nativeElement.scrollHeight - 300);

        if (this.scrollContainer.nativeElement.scrollTop >= (this.scrollContainer.nativeElement.scrollHeight - 800)) {
          this.scrollContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
          this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollTop - 80
            this.queryMoreData()
        } else {
          this.showToTop = true;
        }
      } else {
        this.showToTop = false;
      }
    }, 1000)
  }

  byPassImg() {
    return "https://www.appsheet.com/image/getimageurl?appName=NJY_NuresingHome_new-777845&amp;tableName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA&amp;fileName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA_Images%2Fa886cac2.%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99.053954.jpg&amp;appVersion=8.000138&amp;signature=63c8b90dddffbd7ef77a097fa750c89ddacd0351a62d50fbeaddd7153e5e7627&amp;width=600"
  }

  selectType(item: string) {
    // console.log('Select', item);
    if (item !== this.typeShow) {
      this.timeout = true
      this.typeShow = item
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.timeout = false;
      }, 500);
    }
  }

  async queryMoreData() {
    clearInterval(this.intervalId)
    let offset:number = 0;
    const maxoffset:number = 8;
    // if(this.userProfies.length > 8){
    //   offset = offset + this.userProfies.length
    // }if
    await this.WorkService.queryStoryData(this.userProfies.length + offset,maxoffset).then((data:any)=>{
      this.userDetail = data
      if(data.length > 0){
        data.forEach((res:any) => {
          this.userProfies.push(res)        
        });
        // console.log('this.userProfies',this.userProfies);
      }
      this.checkScroll()
    })
    // this.userProfies.push(
    //   {
    //     name: 'Pannatab Future',
    //     timestamp: '11/12/69 15:50',
    //     type: 'กิจจกรรมมสังคมAk',
    //     image: 'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 1,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatab Future',
    //     timestamp: '11/12/69 15:50',
    //     type: 'กิจจกรรมมสังคมAk',
    //     image: 'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 1,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatab Future',
    //     timestamp: '11/12/69 15:50',
    //     type: 'กิจจกรรมมสังคมAk',
    //     image: 'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 1,
    //     show: true
    //   }
    // )
  }

  queryData() {
    // let offset:number = 0;
    // const maxoffset:number = 15;
    // if(this.userProfies.length > 0){
    //   offset = offset + this.userProfies.length
    // }
    this.WorkService.queryStoryData(0,10).then((data:any)=>{
      // data.forEach((res:any) => {
        this.userProfies = data
      // });
      // console.log('this.userProfies',this.userProfies);
    })

    // this.userProfies = [
    //   {
    //     name: 'Pannatab Saman',
    //     timestamp: '11/01/63 15:50',
    //     type: 'กิจจกรรมมสังคม',
    //     image: 'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 1,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatas Saman',
    //     timestamp: '22/03/63 5:35',
    //     type: 'ส่งเสริมสุขภาพ',
    //     image: 'https://lh3.googleusercontent.com/ZhuELeZJqacONyJKxGXOZ2EJ2fgf7_8oFvFvzhTwnZ4SYyO5QaF0zLwgVhSC7E0=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "r กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 0,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatab Saman',
    //     timestamp: '11/01/63 15:50',
    //     type: 'กิจจกรรมมสังคม',
    //     image: 'https://lh3.googleusercontent.com/R6YafELvItlC5XvCeCk5DD71K26NrYLaXBmUM5SpLP5uJVwoiQ0WlEfp897UegIk=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "Docker ถือว่าเป็นอีกหนึ่งสกิลที่เหล่า programmers/devs ขาดไม่ได้เลยก็ว่าได้เพราะว่าองค์กรหรือบริษัทที่รับสมัครงานส่วนใหญ่แล้วล้วนใช้ Docker กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 0,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatas Saman',
    //     timestamp: '22/03/63 5:35',
    //     type: 'กิจจกรรมมสังคม',
    //     image: 'https://lh3.googleusercontent.com/ZhuELeZJqacONyJKxGXOZ2EJ2fgf7_8oFvFvzhTwnZ4SYyO5QaF0zLwgVhSC7E0=w600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "r กันขอแนะนำคอร์สเรียน Docker  'สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 1,
    //     show: true
    //   },
    //   {
    //     name: 'Pannatap Saman',
    //     timestamp: '27/04/63 12:50',
    //     type: 'ประจำวัน',
    //     image: 'https://www.appsheet.com/image/getimageurl?appName=NJY_NuresingHome_new-777845&tableName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA&fileName=%E0%B8%87%E0%B8%B2%E0%B8%99%20NA_Images%2F37e51b6c.%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99.103107.jpg&appVersion=8.000138&signature=0fcd6191f226a9dca5864de5cb3b76b488e67b14c6bc466371e520e376ce9614&width=600',
    //     title: 'กิจกรรมการเล่นดนตรี/ร้องคาราโอเกะ',
    //     detail: "สนใจ' รับส่วนลดเพิ่ม 300 บาท (จาก 1,500 เหลือ 1,200) ลงทะเบียนแล้วเริ่มเรียนได้ทันที",
    //     heart: 0,
    //     show: true
    //   }
    // ]
  }
  alertImage(img:any){
    this.Image = img
  }
  // AfterViewInit() {
  //   console.log('ngAfterViewInit');

  //   clearInterval(this.intervalId);
  // }
  deleteContent(index:any){
  this.userProfies[index].show = false
    console.log(' this.userProfies', this.userProfies);
  }
}


