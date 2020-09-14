import { Component, OnInit } from '@angular/core';
import { Opportunity } from "../opportunity";
import { Operator } from 'rxjs';
@Component({
  selector: 'app-rover-opportunity',
  templateUrl: './rover-opportunity.component.html',
  styleUrls: ['./rover-opportunity.component.css']
})
export class RoverOpportunityComponent implements OnInit {
  constructor() {}
  //buttons inport json info
  rovorPhotoIndex = 0;
  conditionalRender = null

  opportunityArray: Opportunity[]= [
    {
      "id": 112644,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942415EDNA9X7P1141L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112645,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942415EDNA9X7P1141R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112646,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942591EDNA9X7P1141L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112647,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942591EDNA9X7P1141R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112648,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315944606EDNA9X7P1141L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112649,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315944606EDNA9X7P1141R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112650,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942446ESFA9X7P1145L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112651,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942446ESFA9X7P1145R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112652,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942621ESFA9X7P1140L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112653,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315942621ESFA9X7P1140R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112654,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315944512ESFA9X7P1140L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 112655,
      "sol": 2115,
      "camera": {
        "id": 14,
        "name": "FHAZ",
        "rover_id": 6,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/f/2115/1F315944512ESFA9X7P1140R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133826,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939822EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133827,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939845EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133828,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939867EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133829,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939898EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133830,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939920EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133831,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939942EDNA9X7P1588R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133832,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939942EDNA9X7P1588R0M2-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 133833,
      "sol": 2115,
      "camera": {
        "id": 16,
        "name": "NAVCAM",
        "rover_id": 6,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/n/2115/1N315939942EDNA9X7P1588R0M3-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191657,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315939709ESFA9X7P2601L8M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191658,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315939709ESFA9X7P2601R8M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191659,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315942250ESFA9X7P2547L6M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191660,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315942271ESFA9X7P2547R1M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191661,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315942312ESFA9X7P2547R2M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191662,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315942519ESFA9X7P2146R1M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191663,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315942686ESFA9X7P2146R1M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    },
    {
      "id": 191664,
      "sol": 2115,
      "camera": {
        "id": 17,
        "name": "PANCAM",
        "rover_id": 6,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/1/p/2115/1P315944565ESFA9X7P2146R1M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete"
      }
    }
  ];
  ngOnInit(): void {
    this.conditionalRender = this.rovorPhotoIndex
  }
 
  
  

  backButton(length) {
    if (length <= 0) {
      this.rovorPhotoIndex = this.roverPhotoArrLength;

    } else {
      this.rovorPhotoIndex--;
    }
    this.conditionalRender = this.opportunityArray[this.rovorPhotoIndex]
  }

  forwardButton(length) {
    if (length <= this.rovorPhotoIndex -2) {
      this.rovorPhotoIndex = 0;
    } else {
      this.rovorPhotoIndex++;
    }
    this.conditionalRender = this.opportunityArray[this.rovorPhotoIndex]
  }
  logIndex() {
    console.log(this.rovorPhotoIndex);
   

  }


  roverPhotoArrLength = this.opportunityArray.length
  
  singleMarsPic = [this.opportunityArray[this.rovorPhotoIndex]]
}
