import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'reactive';

  list = [
    {
      id: 1,
      name: 'Nghia',
      age: 20,
      address: 'Hanoi, Vietnam',
      email: 'vtnghia@cmc.com.vn',
      career: 'fresher',
      hobby: 'basketball'
    },
    {
      id: 2,
      name: 'Duong',
      age: 22,
      address: 'Hanoi, Vietnam',
      email: 'nqduong@cmc.com.vn',
      career: 'fresher',
      hobby: 'football'
    },
    {
      id: 3,
      name: 'Tuan',
      age: 24,
      address: 'Bangkok, Thailand',
      email: 'nmtuan3@cmc.com.vn',
      career: 'fresher',
      hobby: 'soccer'
    }
  ]

  isContained: boolean;

  checkDuplicate(name) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i].name.trim() !== name.trim()) {
        this.isContained = true;
      } else this.isContained = false
    }
  }

  addItem(data: any) {
    this.checkDuplicate(data.name)
    if (this.isContained) {
      data.id = this.list.length + 1
      this.list.push(data);
      console.log(data)
      return data;
    }
    else alert('fail to save')

  }

  deleteRow(name) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i].name === name) {
        this.list.splice(i, 1);
      }
    }
  }

  updateItem(data) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i].name === data.name) {
        this.list.splice(i, 1, data);
        alert('update ' + data.name + ' success')
      }
    }
  }


  tableData: any;
  update(id) {
    debugger
    const data = this.list.find(e => e.id = id)
    this.tableData = data
  }

}
