const { container } = require("tsyringe");

export function Get(route) {
  return function (target, key, descriptor) {
    const router = container.resolve("Router");
    router.get(route, descriptor.value);
  };
}

export function Post(route) {
  return function (target, key, descriptor) {
    const router = container.resolve("Router");
    router.post(route, descriptor.value);
  };
}

// export { GetRouteDecorator as Get };