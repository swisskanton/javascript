class Car:
    # Class attribute
    total_cars = 0

    def __init__(self, make, model, year, mileage):
        # Object attributes
        self.make = make
        self.model = model
        self.year = year
        self._mileage = mileage  # Using underscore to indicate it's a private attribute

        # Incrementing class attribute
        Car.total_cars += 1

    # Getter method for mileage
    def get_mileage(self):
        return self._mileage

    # Setter method for mileage
    def set_mileage(self, new_mileage):
        if new_mileage >= 0:
            self._mileage = new_mileage
        else:
            print("Mileage cannot be negative.")

    # __str__ method to represent the object as a string
    def __str__(self):
        return f"{self.year} {self.make} {self.model}, Mileage: {self._mileage} kilometers"

    # Class method to get the total number of cars created
    @classmethod
    def get_total_cars(cls):
        return cls.total_cars

    # Delete method to remove an individual car
    def delete_car(self):
        print(f"Deleting {self.year} {self.make} {self.model}")
        Car.total_cars -= 1

    # Delete method to remove all cars and reset the total car count
    @classmethod
    def delete_all_cars(cls):
        print("Deleting all cars.")
        cls.total_cars = 0

    # Cleanup when an object is deleted
    def __del__(self):
        print(f"{self.year} {self.make} {self.model} has been deleted.")

    # Static method to calculate kilometers per liter
    @staticmethod
    def calculate_kilometers_per_liter(kilometers, liters):
        if liters > 0:
            return kilometers / liters
        else:
            return 0


# Creating instances of the Car class
car1 = Car("Toyota", "Camry", 2020, 15000)
car2 = Car("Honda", "Accord", 2021, 20000)

# Accessing object attributes using getters
print(f"{car1.make} {car1.model} has {car1.get_mileage()} kilometers.")

# Modifying object attribute using setter
car1.set_mileage(16000)
print(f"Updated mileage for {car1.make} {car1.model}: {car1.get_mileage()} kilometers.")

# Calling the __str__ method to display car information
print(car2)

# Accessing class attribute
print(f"Total number of cars created: {Car.get_total_cars()}")

# Deleting an individual car
car1.delete_car()

# Deleting all cars
Car.delete_all_cars()

# Accessing class attribute after deletion
print(f"Total number of cars created: {Car.get_total_cars()}")

# Using the static method to calculate kilometers per liter
kpl = Car.calculate_kilometers_per_liter(300, 10)
print(f"Kilometers per liter: {kpl}")
