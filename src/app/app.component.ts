import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delta';
  items = [{itemName:"1200px-Dell_Studio_1535.png",itemTitle: "Dell Laptop",itemDescription: "This is an laptop by dell",itemPrice: 5054.65},
            {itemName: "047483H2 (1).jpg",itemTitle: "3.0 USB Flash",itemDescription:"USB",itemPrice: 300.00},
            {itemName: "337171-dell-inspiron-14r-5437 (1).jpg",itemTitle: "Dell Laptop 2",itemDescription: "Laptop 02",itemPrice: 5000.00},
            {itemName: "1260687_bk_1160-100160827-orig.jpg",itemTitle: "Dell Laptop 2",itemDescription: "Laptop 03", itemPrice: 4344.54},
            {itemName: "backup-plus-fast-portable-main-packaging-100251068-orig.png",itemTitle: "SSD 01",itemDescription: "SSD 01",itemPrice: 4245.34},
            {itemName: "best-gaming-keyboards-hyperx-alloy-elite-rgb.jpg",itemTitle:"KeyBoard",itemDescription: "keyboards",itemPrice: 543.54},
            {itemName: "Cruzer-Glide_open-retina.png",itemTitle: "SunDisk Flash",itemDescription: "SunDisk flash",itemPrice:312.54},
            {itemName: "dell_inspiron_1318_05.jpg",itemTitle: "Dell Laptop 03",itemDescription: "Dell Laptop",itemPrice: 8767.56},
            {itemName: "dell-2520-core-i3-3rd-gen-4-gb-500-gb-ubuntu-40493-large-1.jpg",itemTitle: "Dell Laptop 04",itemDescription: "Dell Laptop o4",itemPrice: 5454.40},
            {itemName: "driv1574_2.jpg",itemTitle: "Verbatim",itemDescription: "Verbatim",itemPrice: 434.54},
            {itemName: "external-ssd-hard-drive.jpg",itemTitle: "SSD 02", itemDescription: "SSD 02",itemPrice: 5436.42},
            {itemName: "Extreme-PRO-USB-3.1-FlashDrive-right.png", itemTitle: "3.1 USB Flash",itemDescription: "USB 02",itemPrice: 433.43},
            {itemName: "highres-Samsung-Portable-SSD-T1-MU-PS250B-4JPG_1428666817.jpg",itemTitle: "SSD 03",itemDescription: "SSD 03",itemPrice: 564.34},
            {itemName: "kb-107_01.jpg",itemTitle: "Keyboard",itemDescription: "Keyboards 01",itemPrice: 546.3},
            {itemName: "Kingston-flash-drive.jpg",itemTitle: "3.2 USB Flash",itemDescription: "USB 03",itemPrice: 876.65},
            {itemName: "large_682_francium_pro_blueled.jpg",itemTitle: "Keyboards",itemDescription: "Keyboards 02",itemPrice: 567.645},
            {itemName: "photofast_ifdevo64gb_i_flashdrive_evo_lightning_usb_64gb_1107619.jpg",itemTitle: "i-FlashDrive",itemDescription: "i-FlashDrive",itemPrice: 856.54},
            {itemName: "pixma_mg5750_header.jpg",itemTitle: "Printer 01",itemDescription: "Printer 01", itemPrice: 6745.76},
            {itemName: "pny_technologies_p_fd256tbop_ge_256gb_turbo_usb_3_0_1071333.jpg",itemTitle: "3.3 USB Flash",itemDescription: "USB 04",itemPrice: 566.45},
            {itemName: "samsung_850.jpg",itemTitle: "SSD 04",itemDescription: "SSD 04",itemPrice: 434.54},
            {itemName: "solid state drive.jpg",itemTitle: "SSD 05",itemDescription: "SSD 05",itemPrice: 345.65},
            {itemName: "ssd_crucial_full.jpg",itemTitle: "SSD 06",itemDescription: "SSD 06",itemPrice: 678.53},
            {itemName: "ssd_hard_drive_upgrade.jpg",itemTitle: "SSD 07",itemDescription: "SSD 07", itemPrice: 5456.76},
            {itemName: "swivel-usb-flash-drives-usb0014gb-laser-engraved.jpg",itemTitle: "3.4 USB Flash",itemDescription: "USB 04",itemPrice: 5465.54},
            {itemName: "Toshiba SSD THNSNH128GBST.jpg",itemTitle: "Toshiba SSD",itemDescription: "Toshiba SSD",itemPrice: 9785.66},
            {itemName: "u_10143745.jpg",itemTitle: "Canon",itemDescription: "canon",itemPrice: 6775.45},
            {itemName: "u_10157799.jpg",itemTitle: "brother",itemDescription: "brother",itemPrice: 8768.75},
          ];
  newItems = [];
sum = 0;
total=0;
quantity: Number = 0;
addItems(item){
  let index = this.items.indexOf(item);
  this.newItems.push(item);
  this.total = this.total + item.itemPrice;
}

addOtherItems(new_items){
  var a = 0;
  for(var i = 0; i < this.newItems.length; i++){
    if(this.newItems.find(new_items.itemName) == true){
      this.quantity	= a + 1;
    }else{
      this.newItems.push(new_items)
    }
  }
} 

delete(new_items){
  let deleteIndex = this.newItems.indexOf(new_items);
  this.newItems.splice(deleteIndex,1);
}
}
