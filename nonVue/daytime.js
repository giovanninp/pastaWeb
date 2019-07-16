class Daytime{
    
    #min;
    #hour;
    #day;
    #month;
    #year;
    constructor()
    {
        this.#min = 0;
        this.#hour = 0;
        this.#day = 0;
        this.#month = 0;
        this.#year = 0;
    }

    //Setters:
    set_min(min)
    {
        this.#min = min;
    }
    set_hour(hour)
    {
        this.#hour = hour;
    }
    set_day(day)
    {
        this.#day = day;
    }
    set_month(month)
    {
        this.#month = month;
    }
    set_year(year)
    {
        this.#year = year;
    }
    set_birthdate(day,month,year)
    {
        this.#day = day;
        this.#month = month;
        this.#year;
    }
    set_actual_date()
    {
        var x = new Date();
        this.#min = x.getMinutes();
        this.#hour = x.getHours();
        this.#day = x.getUTCDay();
        this.#month = x.getMonth();
        this.#year = x.getFullYear();
    }

    //Getters:
    get_min()
    {
        return this.#min;
    }
    get_hour()
    {
        return this.#hour;
    }
    get_day()
    {
        return this.#day;
    }
    get_month()
    {
        return this.#month;
    }
    get_year()
    {
        return this.#year;
    }
}