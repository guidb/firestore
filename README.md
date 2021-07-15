
<p align = "center" >
    <img src="https://github.com/azkadev/azkadev/blob/main/pp.png?raw=true" width="350" height="350" />
</p >

<p align="center">
    <a href="https://github.com/azkadev"><img title="Author" src="https://img.shields.io/badge/AUTHOR-AZKADEV-orange.svg?style=for-the-badge&logo=github"></a>
</p>

<p align="center"> 
<a href="https://www.buymeacoffee.com/" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>

<p align="center">
<a href="https://t.me/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ft.me%2F%40azkadev&count_bg=%234AA803&title_bg=%231C1C1C&icon=telegram.svg&icon_color=%23FFFFFF&title=Telegram&edge_flat=false"/></a>
<a href="https://tiktok.com/@azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.tiktok.com%2F%40azkadev&count_bg=%234AA803&title_bg=%231C1C1C&icon=tiktok.svg&icon_color=%23FFFFFF&title=Tiktok&edge_flat=false"/></a>
<a href="https://github.com/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2F%40azkadev&count_bg=%232300CB&title_bg=%23663838&icon=github.svg&icon_color=%23FFFFFF&title=Github&edge_flat=false"/></a>
<a href="https://instagram.com/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finstagram.com%2F%40azkadev&count_bg=%237C62F6&title_bg=%23663838&icon=instagram.svg&icon_color=%23FFFFFF&title=Instagram&edge_flat=false"/></a>
 <a href="https://www.youtube.com/channel/UC74N8oC9ow7PK-G8XfWVbcA"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finstagram.com%2Fazkadev&count_bg=%237C62F6&title_bg=%23EB0000&icon=youtube.svg&icon_color=%23FFFFFF&title=Youtube&edge_flat=false"/></a> 
</p>

---

## ❄Content-Library
- 📰 0% Ads
- 💸 0% Tracker
- 📃 0% Logging

## ❄Docs 

1. **Get All** 
		```getAll(name)```
		example

```js
var firestore = require("@guidb/firestore")
var db = new firestore.firestore("./firebase.json")

async function test() {
    var getall = await db.getAll("users")
    console.log(getall)
}
test()
//--! Result log here !--\\
/*
[
  {
    id: '0bQBHNASCO2UDbiQvvx2',
    data: { born: 1815, first: 'Ada', last: 'Lovelace' },
    time: { update_seconds: 1626377997, update_nanoseconds: 305257000 }
  },
  {
    id: '3JijGaZpac8ONq3pKBy3',
    data: { last: 'Lovelace', born: 1815, first: 'Ada' },
    time: { update_seconds: 1626377449, update_nanoseconds: 553502000 }
  },
  {
    id: 'AhDWWUrGSpKeLgLHzSLV',
    data: { first: 'Ada', born: 1815, last: 'Lovelace' },
    time: { update_seconds: 1626378647, update_nanoseconds: 848145000 }
  },
  {
    id: 'RncOIs28UpkGytJ4VPGO',
    data: { born: 1815, last: 'Lovelace', first: 'Ada' },
    time: { update_seconds: 1626378648, update_nanoseconds: 570016000 }
  },
  {
    id: 'Y7aFXiYZwdj07m0da3RP',
    data: { last: 'Lovelace', born: 1815, first: 'Ada' },
    time: { update_seconds: 1626377444, update_nanoseconds: 724274000 }
  },
  {
    id: 'data',
    data: { data: 'oke' },
    time: { update_seconds: 1626382819, update_nanoseconds: 730519000 }
  },
  {
    id: 'data1',
    data: { version: '2', title: 'new title' },
    time: { update_seconds: 1626384801, update_nanoseconds: 749878000 }
  },
  {
    id: 's00VrxQ4gqxcC4d4QSUd',
    data: { first: 'Ada', born: 1815, last: 'Lovelace' },
    time: { update_seconds: 1626378000, update_nanoseconds: 269695000 }
  },
  {
    id: 'uhnILsXYzDagVwTn59Bs',
    data: { last: 'Lovelace', first: 'Ada', born: 1815 },
    time: { update_seconds: 1626377530, update_nanoseconds: 248835000 }
  },
  {
    id: 'user',
    data: { km: [Array] },
    time: { update_seconds: 1626382982, update_nanoseconds: 392675000 }
  }
]

*/
```		

2. **Get get** 
		```db.get(name, id)```
		example
```js
var firestore = require("@guidb/firestore")
var db = new firestore.firestore("./firebase.json")
async function test() {
    var get = await db.get("users", "data1")
    console.log(get)
}

test()
//--! Result log here !--\\
/*
{
  id: 'data1',
  data: { version: '1', title: 'hay' },
  time: { update_seconds: 1626384800, update_nanoseconds: 691138000 }
}
*/
```

3. **add** 
		```add(name, id, data)```
		example
```js
var firestore = require("@guidb/firestore")
var db = new firestore.firestore("./firebase.json")
async function test() {
    var dataa = {
        "title": "hay",
        "version": "1"
    }
    var add = await db.add("users", "data1", dataa)
    console.log(add)
}

test()
//--! Result log here !--\\
/*
{ writeTime: { seconds: 1626384800, nanoseconds: 691138000 } }
*/
```

4. **update** 
		```update(name, id, data_update) ```
		example
```js
var firestore = require("@guidb/firestore")
var db = new firestore.firestore("./firebase.json")
async function test() {
    var data_update = {
        "title": "new title",
        "version": "2"
    }
    var update = await db.update("users", "data1", data_update)
    console.log(update)
}

test()
//--! Result log here !--\\
/*
{ writeTime: { seconds: 1626384801, nanoseconds: 749878000 } }
*/
```

5. **delete** 
		```delete(option)```
		example
```js
var firestore = require("@guidb/firestore")
var db = new firestore.firestore("./firebase.json")
async function test() {
    var Option = {
        "type": "doc",
        "name": "users",
        "doc" : "datatemp"
    }
    var delet = await db.delete(Option)

    console.log(delet)
}

test()
//--! Result log here !--\\
/*
WriteResult {
  _writeTime: Timestamp { _seconds: 1626384802, _nanoseconds: 380867000 }
}


*/
```

## ❄To-Do
A list that i should do more for this project...

- ✔ crud
- 🔜 clone  
- 🔜 diagram  

## 🖥Requirements
- Node v10+ (Node v14 Recommended)
- Network connection

---
