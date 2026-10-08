function checkAccess(isLoggedIn, hasPermission, isBlocked) {
  if (isLoggedIn && hasPermission && !isBlocked) {
    return "Access Granted";
  } else {
    return "Access Denied";
  }
}

console.log(checkAccess(true, true, false));