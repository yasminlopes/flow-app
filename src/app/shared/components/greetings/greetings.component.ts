  public currentDate: Date = new Date();
  getGreetings() {
    const currentHour = this.currentDate.getHours();
    return currentHour >= 6 && currentHour < 12
      ? 'Bom dia!'
      : currentHour >= 12 && currentHour < 18
      ? 'Boa tarde!'
      : 'Boa noite!'
  }

  getCurrentDate() {
    const dayOfWeek = this.daysOfWeek[this.currentDate.getDay()];
    const dayOfMonth = this.currentDate.getDate();
    const month = this.months[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }
