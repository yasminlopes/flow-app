  public currentDate: Date = new Date();
  getGreetings() {
    const currentHour = this.currentDate.getHours();
    return currentHour >= 6 && currentHour < 12
      ? 'Bom dia!'
      : currentHour >= 12 && currentHour < 18
      ? 'Boa tarde!'
      : 'Boa noite!'
  }
