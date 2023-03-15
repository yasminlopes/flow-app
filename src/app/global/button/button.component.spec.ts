import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o texto', () => {
    component.text = 'Texto';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    expect(button.textContent).toContain('Texto');
  });

  it('deve exibir o ícone', () => {
    component.icon = 'favorite';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    expect(button.querySelector('span').textContent).toContain('favorite');
  });

  it('deve ter a classe "outlined"', () => {
    component.outlined = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    expect(button.classList).toContain('outlined');
  });

  it('deve ter a classe de cor', () => {
    component.color = 'primary';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    expect(button.classList).toContain('primary');
  });

  it('deve ter a classe de cor de fundo', () => {
    component.bgColor = 'primary';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    expect(button.classList).toContain('bg-primary');
  });

  it('deve emitir o evento onClick', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('.button');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('deve atualizar a classe do ícone no evento mouseleave', () => {
    component.icon = 'add';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button');
    const icon = button.querySelector('span');
    button.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(icon.classList).toContain('material-icons-outlined');
    expect(icon.classList).not.toContain('add');
  });
});
