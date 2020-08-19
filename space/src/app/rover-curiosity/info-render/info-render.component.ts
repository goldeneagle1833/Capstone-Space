import { Component, OnInit } from '@angular/core';
import { RoverCuriosityComponent } from '../rover-curiosity.component';
//import json info

@Component({
  selector: 'app-info-render',
  templateUrl: './info-render.component.html',
  styleUrls: ['./info-render.component.css'],
})
export class InfoRenderComponent implements OnInit {
  RoverCuriosityComponent;
  indexasdf = 3;
  mars = [
    {
      id: 606340,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050050604895E01_DXXX.jpg',
      earth_date: '2017-01-06 index 2',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606341,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050040604894E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606342,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050030604893E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606343,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050020604892E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606344,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050010604891E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606345,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050000604890E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606346,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080040010604889E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606347,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080040000800242E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606348,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030040604888E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606349,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030030604887E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606350,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030020604886E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606351,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030010604885E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606352,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030000604884E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606353,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020040604883E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606354,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020030604882E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606355,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020020604881E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606356,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020010604880E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606357,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020000604879E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606358,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080010000604878C00_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606359,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000140800241E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606360,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000130800240D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606361,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000120800239D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606362,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000110800238D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606363,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000100800237D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606364,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000090800236D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606365,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000080800235D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606366,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000060604877E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606367,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000050604876D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606368,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000040604875D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606369,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000030604874D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606370,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000020604873D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606371,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000010604872D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606372,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000000604871D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606373,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990130604870D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606374,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990120604869D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606375,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990110604868D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606376,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990100604867D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606377,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990090604866D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606378,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990080604865D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606379,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990070604864E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606380,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990060800234D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606381,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990050800233D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606382,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990040800232D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606383,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990030800231D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606384,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990020800230D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606385,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990010800229D01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606386,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990000800228E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606387,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079980000800227E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606388,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079970000800226E01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606389,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050050604895I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606390,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050040604894I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606391,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050030604893I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606392,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050020604892I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606393,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050010604891I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606394,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080050000604890I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606395,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080040010604889I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606396,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080040000800242I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606397,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030040604888I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606398,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030030604887I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606399,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030020604886I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606400,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030010604885I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606401,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080030000604884I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606402,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020040604883I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606403,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020030604882I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606404,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020020604881I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606405,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020010604880I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606406,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080020000604879I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606407,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080010000604878I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606408,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000140800241I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606409,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000130800240I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606410,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000120800239I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606411,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000110800238I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606412,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000100800237I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606413,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000090800236I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606414,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0080000080800235I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606415,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000060604877I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606416,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000050604876I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606417,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000040604875I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606418,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000030604874I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606419,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000020604873I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606420,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000010604872I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606421,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0080000000604871I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606422,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990130604870I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606423,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990120604869I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606424,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990110604868I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606425,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990100604867I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606426,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990090604866I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606427,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990080604865I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606428,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571ML0079990070604864I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606429,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990060800234I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606430,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990050800233I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606431,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990040800232I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606432,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990030800231I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606433,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990020800230I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606434,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990010800229I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606435,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079990000800228I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606436,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079980000800227I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
    {
      id: 606437,
      sol: 1571,
      camera: {
        id: 22,
        name: 'MAST',
        rover_id: 5,
        full_name: 'Mast Camera',
      },
      img_src:
        'http://mars.jpl.nasa.gov/msl-raw-images/msss/01571/mcam/1571MR0079970000800226I01_DXXX.jpg',
      earth_date: '2017-01-06',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
  ];

  singleMarsPic = [this.mars[this.indexasdf]];

  constructor() {}
  // property binding
  // looping over in html json arr obj
  ngOnInit(): void {}
}
