/**
 * Returns true or false if the page is in the list of pages withouth Footer
 * @param  {NextRouter} router
 * @return {Boolean}
 */
export default function pageDontNeedFooter(router) {
  const path = router.asPath;
  const pathsArray = ["/login", "/signup"];
  return pathsArray.includes(path);
}
