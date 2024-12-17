export function calculateDaysDifference(dateCreated: string | Date): string {
  const createdDate = new Date(dateCreated);
  const currentDate = new Date();

  // Check if the date is valid.
  if (isNaN(createdDate.getTime())) {
    throw new Error("Invalid date format provided to calculateDaysDifference");
  }

  // Calculate difference in time (milliseconds)
  const timeDifference = currentDate.getTime() - createdDate.getTime();

  // convert to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference >= 365) {
    const years = Math.floor(daysDifference / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (daysDifference >= 30) {
    const months = Math.floor(daysDifference / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
  }
}
