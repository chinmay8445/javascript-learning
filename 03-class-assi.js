class Vehicle {
    constructor(brand, model, year, color, price) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
    }
  
    logDetails() {
      console.log(`Brand: ${this.brand}, Fuel type: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }
  }

  console.log("\nVehicale Details\n");

  
  // Create 5 Vehicle objects
  const vehicle1 = new Vehicle("Tata", "Petrol", 2020, "Red", 2000000);
  const vehicle2 = new Vehicle("Honda", "Diesel", 2021, "Blue", 2200000);
  const vehicle3 = new Vehicle("Ford", "Diesel", 2019, "White", 1800000);
  const vehicle4 = new Vehicle("BMW", "Petrol", 2023, "Black", 6000000);
  const vehicle5 = new Vehicle("Toyota", "Petrol", 2022, "Silver", 4500000);
  
  // Log details of each vehicle
  vehicle1.logDetails();
  vehicle2.logDetails();
  vehicle3.logDetails();
  vehicle4.logDetails();
  vehicle5.logDetails();
  
  console.log("\n****************************\n");
  
  class College {
    constructor(name, location, establishedYear, coursesOffered) {
      this.name = name;
      this.location = location;
      this.establishedYear = establishedYear;
      this.coursesOffered = coursesOffered;
    }
  
    display() {
      console.log(`Name: ${this.name}, Location: ${this.location}, Established: ${this.establishedYear}, Courses: ${this.coursesOffered.join(', ')}`);
    }
  }

  console.log("\nCollege Details\n");
  
  // Create 4 College objects
  const college1 = new College("AKJC", "Sangli", 2000,["Science","Physics"]);
  const college2 = new College("ADCET", "Ashta", 1995,["Computor science","Mechanical","Electrical"]);
  const college3 = new College("MIT", "Pune", 1861,["Information tecnology","E&tc","Electrical"] );
  const college4 = new College("Walchand", "Sangli", 1990,["Science","Physics"] );
  
  // Display details of each college
  college1.display();
  college2.display();
  college3.display();
  college4.display();
  
  