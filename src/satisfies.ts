type Setting = string | number | {[key:string]: Setting} | Setting[]

type Settings = Record<string, Setting>
const mySettings = {
  title: 'web site',
  size:200,
  overrides: [
    {'font-size': '20px'},
  ],
  styleConfig : {
    color: 'red'
  },
  count: 200
} satisfies Settings;



mySettings.title = 'new title'
console.log(mySettings.size)

//console.log(mySettings.scott)

//mySettings.limit = 200