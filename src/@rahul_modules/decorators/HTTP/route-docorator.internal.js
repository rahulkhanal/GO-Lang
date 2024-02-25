import { container } from 'tsyringe';
import RouterSetup from '../../routes/router-setup';

container.register('Router', { useClass: RouterSetup });
export const router = container.resolve(RouterSetup);

export function GetRouteDecoratorMadeForInternal(route) {
  return function (target, key, descriptor) {
    const router = container.resolve("Router");
    router.get(route, descriptor.value);
  };
}

export function PostRouteDecoratorMadeForInternal(route) {
  return function (target, key, descriptor) {
    const router = container.resolve("Router");
    router.post(route, descriptor.value);
  };
} 
