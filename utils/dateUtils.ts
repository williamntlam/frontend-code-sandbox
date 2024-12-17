function calculateDaysDifference(dateCreated: string | Date): number {
  const createdDate = new Date(dateCreated);
  const currentDate = new Date();

  // Check if the date is valid.
  if (isNaN(createdDate.getTime())) {
    throw new Error("Invalid date format provided to calculateDaysDifference");
  }

  // Calculate difference in time (milliseconds)
  const timeDifference = currentDate.getTime() - createdDate.getTime();

  // convert to days
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return dayDifference;
}

module.exports = { calculateDaysDifference };
