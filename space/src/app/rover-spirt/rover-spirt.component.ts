import { Component, OnInit } from '@angular/core';
import { Spirit } from "../spirit";
import { SpiritComponent } from '../landing-page/spirit/spirit.component';

@Component({
  selector: 'app-rover-spirt',
  templateUrl: './rover-spirt.component.html',
  styleUrls: ['./rover-spirt.component.css']
})
export class RoverSpirtComponent implements OnInit {
  constructor() {}
  //buttons inport json info
  rovorPhotoIndex = 0;
  conditionalRender = null
  spiritArray: Spirit[] = [
    {
      "id": 279947,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989100EFFB2BDP1236L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279948,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989100EFFB2BDP1236R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279949,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989899EFFB2BQP1236L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279950,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989899EFFB2BQP1236R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279951,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990819EFFB2BWP1236L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279952,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990819EFFB2BWP1236R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279953,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991738EFFB2BYP1254L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279954,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991738EFFB2BYP1254L0M2-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279955,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991738EFFB2BYP1254R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279956,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989200ESFB2BDP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279957,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989200ESFB2BDP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279958,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989614ESFB2BHP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279959,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989614ESFB2BHP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279960,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989707ESFB2BLP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279961,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989707ESFB2BLP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279962,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989802ESFB2BQP1248L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279963,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315989802ESFB2BQP1248R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279964,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990718ESFB2BWP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279965,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990718ESFB2BWP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279966,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990939ESFB2BXP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279967,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315990939ESFB2BXP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279968,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991284ESFB2BYP1247L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279969,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991284ESFB2BYP1247R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 279970,
      "sol": 2136,
      "camera": {
        "id": 27,
        "name": "FHAZ",
        "rover_id": 7,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/f/2136/2F315991284ESFB2BYP1247R0M2-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287427,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989150EFFB2BDP1336L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287428,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989150EFFB2BDP1336R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287429,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989981EFFB2BQP1336L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287430,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989981EFFB2BQP1336R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287431,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990871EFFB2BWP1336L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287432,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990871EFFB2BWP1336R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287433,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315991789EFFB2BYP1354L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287434,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315991789EFFB2BYP1354R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287435,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989250ESFB2BDP1347L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287436,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989250ESFB2BDP1347R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287437,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989650ESFB2BHP1347L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287438,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989650ESFB2BHP1347R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287439,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989743ESFB2BLP1347L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287440,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989743ESFB2BLP1347R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287441,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989838ESFB2BQP1348L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287442,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315989838ESFB2BQP1348R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287443,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990768ESFB2BWP1347L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287444,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990768ESFB2BWP1347L0M2-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287445,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990768ESFB2BWP1347L0M3-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287446,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315990768ESFB2BWP1347R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287447,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315991333ESFB2BYP1347L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 287448,
      "sol": 2136,
      "camera": {
        "id": 28,
        "name": "RHAZ",
        "rover_id": 7,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/r/2136/2R315991333ESFB2BYP1347R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290785,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315989303EFFB2BDP1806L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290786,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315989303EFFB2BDP1806R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290787,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315990057EFFB2BQP1809L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290788,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315990057EFFB2BQP1809R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290789,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315991384EFFB2BYP1809L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290790,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315991384EFFB2BYP1809R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290791,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315989018EDNB2BDF0006L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290792,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315989018EDNB2BDF0006R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290793,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315990437EDNB2BWF0006L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290794,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315990437EDNB2BWF0006R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290795,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315991018EDNB2BYF0006L0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 290796,
      "sol": 2136,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/2136/2N315991018EDNB2BYF0006R0M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319008,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986500EDNB2BDP2102L2M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319009,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986531EDNB2BDP2102L6M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319010,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986564EDNB2BDP2102L7M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319011,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986608EDNB2BDP2104L2M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319012,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986640EDNB2BDP2104L6M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319013,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986681EDNB2BDP2104L7M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319014,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986419ESFB2BDP2601L8M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319015,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315986419ESFB2BDP2601R8M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319016,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991459ESFB2BYP2142L2M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319017,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991491ESFB2BYP2142L5M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319018,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991526ESFB2BYP2142L7M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319019,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991600ESFB2BYP2143L2M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319020,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991631ESFB2BYP2143L5M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 319021,
      "sol": 2136,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/2136/2P315991668ESFB2BYP2143L7M1-BR.JPG",
      "earth_date": "2010-01-06",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    }
  
]

  ngOnInit(): void {

    this.conditionalRender = this.rovorPhotoIndex
  }
 
  
  

  backButton(length) {
    if (length <= 0) {
      this.rovorPhotoIndex = this.roverPhotoArrLength;

    } else {
      this.rovorPhotoIndex--;
    }
    this.conditionalRender = this.spiritArray[this.rovorPhotoIndex]
  }

  forwardButton(length) {
    if (length <= this.rovorPhotoIndex -2) {
      this.rovorPhotoIndex = 0;
    } else {
      this.rovorPhotoIndex++;
    }
    this.conditionalRender = this.spiritArray[this.rovorPhotoIndex]
  }
  logIndex() {
    console.log(this.rovorPhotoIndex);
  
  }



  roverPhotoArrLength = this.spiritArray.length
  
  singleMarsPic = [this.spiritArray[this.rovorPhotoIndex]]
}
