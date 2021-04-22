import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EdieHomepageComponent } from './edie-homepage.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EdieHomepageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EdieHomepageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'edie-homepage-master'`, () => {
    const fixture = TestBed.createComponent(EdieHomepageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('edie-homepage-master');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EdieHomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('edie-homepage-master app is running!');
  });
});
