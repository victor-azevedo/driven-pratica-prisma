import prisma from "../config/database.js";

async function getCars() {
  const cars = await prisma.cars.findMany();
  return cars;
}

async function getCar(id: number) {
  const car = await prisma.cars.findUnique({ where: { id } });
  return car;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const car = await prisma.cars.findUnique({ where: { licensePlate } });
  return car;
}

async function createCar(
  model: string,
  licensePlate: string,
  year: number,
  color: string
) {
  await prisma.cars.create({
    data: { model, licensePlate, year: year.toString(), color },
  });
}

async function deleteCar(id: number) {
  await prisma.cars.delete({ where: { id } });
}

const carRepository = {
  getCars,
  getCar,
  getCarWithLicensePlate,
  createCar,
  deleteCar,
};

export default carRepository;
