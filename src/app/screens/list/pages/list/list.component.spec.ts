import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListService } from '../../services/list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from '../../pipes/custom.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Tech } from '../../../../interfaces/tech.interface';
import { of } from 'rxjs';

const mockTechList: Tech[] = [
  {
    "tech": "Node",
    "year": "2009",
    "author": "Ryan Dahl",
    "license": "MIT",
    "language": "JavaScript",
    "type": "Back-End",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
  },
  {
    "tech": "React",
    "year": "2013",
    "author": "Jordan Walke",
    "license": "MIT",
    "language": "JavaScript",
    "type": "Front-End",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
  },
  {
    "tech": "Vue",
    "year": "2014",
    "author": "Evan You",
    "license": "MIT",
    "language": "JavaScript",
    "type": "Front-End",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png"
  }
]

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockList = mockTechList;
  let service: ListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListComponent,
        CustomPipe
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ListService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(ListService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.GetTechs).toBeTruthy();
  });

  it('should subscribe method', fakeAsync(() => {
    let techsSpy = spyOn(service, 'GetTechs').and.returnValue(of(mockList));
    let subSpy = spyOn(service.GetTechs(), 'subscribe');
    component.GetTechs();
    fixture.detectChanges();
    expect(techsSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('should call GetTechs and return list of techs', async(() => {
    spyOn(service, 'GetTechs').and.returnValue(of(mockList))
    component.GetTechs();
    fixture.detectChanges();
    expect(component.techList).toEqual(mockList);
  }));
});



