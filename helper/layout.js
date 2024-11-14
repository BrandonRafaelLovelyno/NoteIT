const removeHyphens = (str) => str.replace(/-/g, " ");

export const getNavbarTitle = (pathname) => {
  const pathSegments = pathname.split("/").filter(Boolean);

  let lastSegment = pathSegments[pathSegments.length - 1];
  lastSegment = removeHyphens(lastSegment);

  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};
