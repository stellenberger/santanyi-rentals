Santanyi Rentals

This is the official GitHub repository for the Santanyi Holiday Rentals website

You can view the website at: https://master.d14r4w66mm3648.amplifyapp.com/

## Adding dates onto a property

You will need to do the following: 

1. Go to the JSON date file for the respective property. For example, for Embarcadero, you will find it in: `./houses/EmbarcaderoProperty/bookings.json`
2. Go down to the year, and then the month that you want to add a date range to. 
3. It takes an array of *seperate* dates. Please put all the dates from the range in. 
4. For example, for 21st - 25th August, you will do something like
```json=
{
  "2022" {
    // other months ommited for brevity
    "August" {
      // other dates ommited for brevity
      ["21","22","23","24","25"]
    }
  }
}
```
