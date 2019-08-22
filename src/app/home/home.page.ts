import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  graphHistogram() {

    var groupFrequency = []
    var currentInterval = 0
    var datasetInt = []

    var input_dataset =document.getElementById("input_dataset").value
    console.log("Dataset (string): " + input_dataset)
    var divisions = parseInt(document.getElementById("input_divisions").value,10)
    console.log("Divisions: " + divisions)



    // Parse values into integers
    var dataset = input_dataset.split(", ")
    console.log("dataset.length: " + dataset.length)
    console.log("Dataset (array): " + dataset)
    for (var t = 0; t <= dataset.length; t++) {

      datasetInt[t] = parseInt(dataset[t], 10)

    }

    console.log(datasetInt)

    var maxValue = Math.max.apply(null, dataset)
    console.log("Max Value: " + maxValue)
    var interval = maxValue/divisions
    console.log(datasetInt.length)

    for (var i = 0; i <= divisions; i++) {

      var currentInterval = currentInterval + interval;

      for (var n = 0; i <= datasetInt.length; n++)

      console.log(datasetInt[n])

        if (datasetInt[n] < currentInterval) {
          if (datasetInt[n] >= (currentInterval - divisions)) {
            var previousValue = groupFrequency[i]
            groupFrequency.splice(i, 1, previousValue)
            console.log(groupFrequency[i])
          }
        }

    }

    console.log(groupFrequency)
  }

}
