class UsersResponse {
  users = $state();
  error = $state();
  isLoading = $state(false);
}

export default function useFetchUsers() {
  const resp = new UsersResponse();

  async function fetchData() {
    resp.isLoading = true;
    try {
      // delay loading in storybook so we can see the placeholder message
      if (Object.keys(window).some((k) => /STORYBOOK/.test(k))) {
        let ref;
        await new Promise(
          (resolve) => (ref = setTimeout(resolve, 3000))
        ).finally(() => clearTimeout(ref));
      }

      const response = await fetch("https://randomuser.me/api/?results=3");
      resp.users = (await response.json()).results;
      resp.error = undefined;
    } catch (err) {
      resp.error = err;
      resp.users = undefined;
    }
    resp.isLoading = false;
  }

  fetchData();
  return resp;
}
