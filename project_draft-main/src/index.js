let Regdata
let MapCodes

if(document.readyState !== "loading") {
  console.log("Document is ready!");
  initCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
      console.log("Document is ready after waiting!");
      initCode();
      Regdata= getAreaData();
      MapCodes= getMapAreaNames();
  })
}


const getAreaData= async() => {


  var url= "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/mkan/statfin_mkan_pxt_11ic.px"


  const jsonQuery = {
    "query": [
      {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "SSS",
            "MA1",
            "MK01",
            "KU049",
            "KU091",
            "KU106",
            "KU186",
            "KU224",
            "KU235",
            "KU245",
            "KU257",
            "KU444",
            "KU505",
            "KU543",
            "KU611",
            "KU753",
            "KU755",
            "KU858",
            "KU092",
            "KU927",
            "KU407",
            "KU434",
            "KU018",
            "KU504",
            "KU638",
            "KU616",
            "KU078",
            "KU149",
            "KU710",
            "MK02",
            "KU019",
            "KU284",
            "KU430",
            "KU480",
            "KU561",
            "KU636",
            "KU734",
            "KU761",
            "KU202",
            "KU423",
            "KU481",
            "KU503",
            "KU529",
            "KU538",
            "KU577",
            "KU680",
            "KU704",
            "KU738",
            "KU853",
            "KU304",
            "KU400",
            "KU631",
            "KU833",
            "KU895",
            "KU918",
            "KU322",
            "KU445",
            "MK05",
            "KU061",
            "KU103",
            "KU169",
            "KU834",
            "KU981",
            "KU082",
            "KU109",
            "KU165",
            "KU086",
            "KU433",
            "KU694",
            "MK07",
            "KU016",
            "KU081",
            "KU111",
            "KU098",
            "KU142",
            "KU316",
            "KU398",
            "KU560",
            "KU576",
            "KU781",
            "MK08",
            "KU075",
            "KU285",
            "KU489",
            "KU624",
            "KU935",
            "KU286",
            "MK09",
            "KU153",
            "KU580",
            "KU689",
            "KU700",
            "KU405",
            "KU416",
            "KU441",
            "KU739",
            "KU831",
            "MK04",
            "KU181",
            "KU214",
            "KU230",
            "KU747",
            "KU079",
            "KU102",
            "KU271",
            "KU484",
            "KU531",
            "KU608",
            "KU609",
            "KU886",
            "KU050",
            "KU051",
            "KU684",
            "KU783",
            "MK06",
            "KU020",
            "KU887",
            "KU908",
            "KU619",
            "KU790",
            "KU143",
            "KU250",
            "KU581",
            "KU108",
            "KU211",
            "KU291",
            "KU418",
            "KU536",
            "KU562",
            "KU604",
            "KU635",
            "KU837",
            "KU922",
            "KU980",
            "KU177",
            "KU508",
            "KU702",
            "KU936",
            "MK13",
            "KU172",
            "KU435",
            "KU077",
            "KU179",
            "KU410",
            "KU500",
            "KU592",
            "KU850",
            "KU892",
            "KU182",
            "KU249",
            "KU495",
            "KU216",
            "KU226",
            "KU256",
            "KU265",
            "KU312",
            "KU601",
            "KU729",
            "KU931",
            "KU275",
            "KU992",
            "MK14",
            "KU005",
            "KU052",
            "KU403",
            "KU759",
            "KU934",
            "KU010",
            "KU300",
            "KU989",
            "KU145",
            "KU152",
            "KU233",
            "KU301",
            "KU408",
            "KU743",
            "KU151",
            "KU218",
            "KU232",
            "KU846",
            "MK15",
            "KU288",
            "KU440",
            "KU599",
            "KU598",
            "KU893",
            "KU231",
            "KU287",
            "KU545",
            "KU280",
            "KU399",
            "KU475",
            "KU499",
            "KU905",
            "KU946",
            "MK10",
            "KU097",
            "KU213",
            "KU491",
            "KU507",
            "KU588",
            "KU623",
            "KU178",
            "KU593",
            "KU046",
            "KU681",
            "KU740",
            "KU768",
            "MK11",
            "KU204",
            "KU687",
            "KU857",
            "KU297",
            "KU749",
            "KU686",
            "KU778",
            "KU844",
            "KU921",
            "KU171",
            "KU420",
            "KU915",
            "KU140",
            "KU239",
            "KU263",
            "KU402",
            "KU595",
            "KU762",
            "KU925",
            "MK12",
            "KU090",
            "KU146",
            "KU167",
            "KU176",
            "KU276",
            "KU426",
            "KU309",
            "KU607",
            "KU260",
            "KU707",
            "KU848",
            "KU422",
            "KU541",
            "MK16",
            "KU074",
            "KU236",
            "KU421",
            "KU584",
            "KU849",
            "KU924",
            "KU217",
            "KU272",
            "MK17",
            "KU071",
            "KU630",
            "KU791",
            "KU305",
            "KU832",
            "KU069",
            "KU317",
            "KU535",
            "KU626",
            "KU691",
            "KU072",
            "KU244",
            "KU425",
            "KU436",
            "KU494",
            "KU564",
            "KU859",
            "KU139",
            "KU615",
            "KU889",
            "KU785",
            "KU625",
            "KU678",
            "KU748",
            "KU009",
            "KU208",
            "KU483",
            "KU563",
            "KU746",
            "KU977",
            "MK18",
            "KU205",
            "KU578",
            "KU697",
            "KU765",
            "KU105",
            "KU290",
            "KU620",
            "KU777",
            "MK19",
            "KU320",
            "KU583",
            "KU614",
            "KU732",
            "KU742",
            "KU240",
            "KU241",
            "KU751",
            "KU845",
            "KU851",
            "KU148",
            "KU758",
            "KU890",
            "KU683",
            "KU698",
            "KU854",
            "KU976",
            "KU047",
            "KU261",
            "KU273",
            "KU498",
            "MA2",
            "MK21",
            "KU478",
            "KU043",
            "KU060",
            "KU065",
            "KU076",
            "KU170",
            "KU417",
            "KU438",
            "KU736",
            "KU771",
            "KU035",
            "KU062",
            "KU295",
            "KU318",
            "KU766",
            "KU941",
            "MA2X",
            "200",
            "X"
          ]
        }
      },
      {
        "code": "Ajoneuvoluokka",
        "selection": {
          "filter": "item",
          "values": [
            "01"
          ]
        }
      },
      {
        "code": "Liikennekäyttö",
        "selection": {
          "filter": "item",
          "values": [
            "0"
          ]
        }
      },
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "2021"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }



  const res = await fetch(url, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(jsonQuery)
})
if(!res.ok) {
    return;
}






const data = await res.json()





console.log(data)


return data




}

const getMapAreaNames= async() => {


  const url= "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"
  
  
  
  const Fetched= await fetch(url)
  
 
  
  const Area= await Fetched.json()
  
  
  
  var cities= Area.variables[1].valueTexts
  
  var cityCodes= Area.variables[1].values


  var Arrayy= [cities, cityCodes]

  return Arrayy





}


const fetchData = async () => {
  
  const url =
    "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";

  const res = await fetch(url);
  const data = await res.json();

  

  initMap(data)
};

const initMap = (data) => {
  let map = L.map("map")

  

  

  
  let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  



let CityName
  
  
  const getFeature = async (feature, layer) => {
    if (!feature.properties.kunta) return;


    CityName= feature.properties.name

    


    CityValue= await getAreaValue(await CityName)

    


    


      
    
    layer.bindPopup(CityName+ " "+ CityValue)



  }






  const getAreaValue= async(City) =>{


    RegionData= await Regdata


    


    AreaIndex= Object.values(RegionData.dimension.Alue);

    AreaIndex= AreaIndex[1].label


    var index


    
    

    for (i= 0; i < await Object.keys(AreaIndex).length; i++) {

      indexx= await Object.keys(AreaIndex)[i]

      if (await AreaIndex[indexx] == City) {

        index= indexx

        console.log(await index)




        break

      }

      else{

  
        continue

      }



  

    }



    AreaValueIndex= Object.values(RegionData.dimension.Alue)

    AreaValueIndex= AreaValueIndex[1].index

    

    
    
    
    

    AreaValueIndex= await AreaValueIndex[await index]

    console.log(await AreaValueIndex)

    



    AreaValue= await RegionData.value[await AreaValueIndex]



    console.log(await AreaValue)

    

    

    



    return AreaValue
  }







  function ShowSuggestion() {
  
 

    newEl= document.createElement("div")
  
  newEl.innerHTML= "Show yearly statistics for this city: "+CityName

  newEl.setAttribute("id", "city");

  document.getElementById("space").appendChild(newEl)

  return null


  }

  




  
  
  

  let geoJson= L.geoJSON(data, {
    onEachFeature: getFeature
  }).addTo(map)

  map.fitBounds(geoJson.getBounds())



  
  
};



fetchData();












const getAreaNames= async (Alue) => {
  
  
  Alue= Alue.toUpperCase()
  
  
  
 
  
  const url= "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"
  
  
  
  const Fetched= await fetch(url)
  
 
  
  const Area= await Fetched.json()
  
  
  
  var cities= Area.variables[1].valueTexts
  
  var cityCodes= Area.variables[1].values
  
  
  
  for (let i= 0; i< cities.length; i++) {
      
      
      
      cities[i]= cities[i].toUpperCase()
      
  }
      
      
 
  
  
  
  
  if (cities.indexOf(Alue)) {
      
      
      
      
      
      var index= cities.indexOf(Alue)
      
      
      
  }
  
  else {
      
      return null
  }
  
  
  
  var Code= cityCodes[index]
  
  
  
  return Code
  
  
  
}




const launchChart= async () => {
    
    
    
  const Area = document.getElementById("input-area").value
  
  var Code= getAreaNames(Area)
  
  
   
Code= await getAreaNames(Area)
      
      
  
  
 
  
  

  
  document.getElementById("legend").innerHTML= Area
  
  
  
  buildChart(Code)
  
  
  
  return Code
  
    
  
}

    
  





function initCode() {
  
buildChart("SSS")
 
const addAreaButton = document.getElementById("submit-area");

const Area = document.getElementById("input-area").value





addAreaButton.addEventListener("click", function() {
    
  launchChart()  

  
})}



const JsonQuery= async (Area) => {
  
   

const jsonQuery = {
  "query": [
    {
      "code": "Alue",
      "selection": {
        "filter": "item",
        "values": [
          Area
        ]
      }
    },
    {
      "code": "Ajoneuvoluokka",
      "selection": {
        "filter": "item",
        "values": [
          "01"
        ]
      }
    },
    {
      "code": "Liikennekäyttö",
      "selection": {
        "filter": "item",
        "values": [
          "0"
        ]
      }
    }
  ],
  "response": {
    "format": "json-stat2"
  }
}



return jsonQuery


}









const getData = async (Area, url) => {
  


const res = await fetch(url, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(await JsonQuery(Area))
})
if(!res.ok) {
    return;
}






const data = await res.json()

return data
}



const buildChart = async (Area) => {


  const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/mkan/statfin_mkan_pxt_11ic.px"


  
const data = await getData(Area, url)


if (data== null) {
      
  document.getElementById("legend").innerHTML= "Sorry, Tilastokeskus has no data about about this municipality!"
  
}



const years = Object.values(data.dimension.Vuosi.category.label);
const regions = Object.values(data.dimension.Alue.category.label);
const population = data.value;


    
    



regions.forEach((region, index) => {
  
    let valuesList = []
    for(let i = 0; i < years.length; i++) {
        valuesList.push(population[i])
    }
    regions[index] = {
        name: region,
        values: valuesList
    }
})



const chartData = {
    labels: years,
    datasets: regions,
}


const chart = new frappe.Chart("#chart", {
    title: "Progression of number registered cars yearly 2011-2021",
    data: chartData,
    type: "line",
    height: 450,
    
    colors: ["yellow"],
    
    lineOptions: {
        hideDots: 1,
        regionFill: 0
    }

})



}

















