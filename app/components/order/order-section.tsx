'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { FaLock, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { allPizzas, deliveryAreas } from '../../features/order/order-data';
import { orderSchema } from '../../features/order/order-schema';
import type { CartItem, OrderFormData, Pizza } from '../../features/order/order-types';
import { formatPrice, pluralProducts } from '../../features/order/order-utils';
import { Container } from '../container';
import {
  CartItemRow,
  DeliveryAreasBox,
  FulfillmentToggle,
  MobileCheckout,
  OrderFormFields,
  PaymentOptions,
} from './order-ui';

export function OrderSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [cartError, setCartError] = useState('');
  const [mobileCheckoutOpen, setMobileCheckoutOpen] = useState(false);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0),
    [cart],
  );

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fulfillmentType: 'delivery',
      payment: 'cash',
      name: '',
      phone: '',
      locality: '',
      street: '',
      zip: '',
      apartment: '',
      notes: '',
    },
  });

  const fulfillmentType = watch('fulfillmentType');

  function addToCart(pizza: Pizza) {
    setCartError('');
    setCart((prev) => {
      const existing = prev.find((item) => item.pizza.id === pizza.id);
      if (existing) {
        return prev.map((item) =>
          item.pizza.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { pizza, quantity: 1 }];
    });
  }

  function changeQty(id: string, delta: number) {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.pizza.id !== id) return [item];
        const newQty = item.quantity + delta;
        return newQty <= 0 ? [] : [{ ...item, quantity: newQty }];
      }),
    );
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.pizza.id !== id));
  }

  function switchFulfillment(type: 'delivery' | 'pickup') {
    setValue('fulfillmentType', type, { shouldValidate: false });
    if (type === 'pickup') {
      setValue('locality', '');
      setValue('street', '');
      setValue('zip', '');
      setValue('apartment', '');
    }
  }

  function onDesktopSubmit(data: OrderFormData) {
    if (cart.length === 0) {
      setCartError('Dodaj przynajmniej jedną pizzę do zamówienia.');
      return;
    }
    if (data.fulfillmentType === 'delivery') {
      const area = deliveryAreas.find((a) => a.id === data.locality);
      const min = area?.minOrder ?? 50;
      if (total < min) {
        setCartError(`Minimalna wartość zamówienia dla tej miejscowości wynosi ${formatPrice(min)}.`);
        return;
      }
    }
    setOrderSuccess(true);
  }

  if (orderSuccess) {
    return (
      <section id="zamow" className="bg-(--c-paper) py-20">
        <Container>
          <div className="mx-auto max-w-lg rounded-2xl bg-[#101010] p-10 text-center text-white">
            <div className="mb-4 flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-(--c-green)/20 text-(--c-green) text-4xl">
              ✓
            </div>
            <h2 className="m-0 font-heading text-3xl uppercase">Zamówienie przyjęte!</h2>
            <p className="mt-4 font-base text-sm leading-relaxed text-white/60">
              Skontaktujemy się z Tobą telefonicznie w celu potwierdzenia zamówienia.
            </p>
            <button
              onClick={() => {
                setOrderSuccess(false);
                setCart([]);
                reset();
              }}
              className="btn-base mt-8 bg-red-700 border-red-700 text-white hover:bg-red-800"
            >
              Złóż nowe zamówienie
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="zamow" className="bg-(--c-paper) pt-0 pb-12">
      <div className="relative isolate overflow-hidden bg-[#050505] px-4 py-12 sm:py-16 md:min-h-[260px] md:py-20">
        <Image
          src="/pizza-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] md:object-center"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <Container className="relative">
          <h2 className="m-0 font-heading text-5xl font-extrabold uppercase leading-none text-white [text-shadow:0_2px_0_rgba(0,0,0,.45)] sm:text-6xl lg:text-7xl">
            Zamów online
          </h2>
          <p className="mt-3 font-base text-sm font-semibold uppercase tracking-widest text-white/60">
            Szybko, wygodnie i bez kolejki
          </p>
        </Container>
      </div>

      <Container className="mt-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">
          <div className={cartCount > 0 ? 'pb-24 lg:pb-0' : ''}>
            <div className="mb-2 flex items-center gap-3">
              <Image src="/icons/pizza.png" alt="" width={30} height={30} unoptimized />
              <h3 className="m-0 font-heading text-3xl font-bold uppercase sm:text-4xl">
                Nasze pizze
              </h3>
            </div>
            <p className="mb-6 font-base text-sm font-semibold text-brand-muted">
              Wszystkie nasze pizze przygotowujemy w jednym rozmiarze –{' '}
              <strong className="text-(--c-red)">32 cm</strong>
            </p>

            <div className="flex flex-col gap-2.5">
              {allPizzas.map((pizza) => {
                const cartItem = cart.find((ci) => ci.pizza.id === pizza.id);
                return (
                  <div
                    key={pizza.id}
                    className="flex items-center gap-3 rounded-xl border border-[rgba(38,34,29,.15)] bg-brand-white px-4 py-3 shadow-sm"
                  >
                    <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-lg bg-[#1a100a]">
                      <Image src="/pizza-hero.png" alt={pizza.name} fill sizes="68px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-lg font-semibold uppercase leading-tight">
                          {pizza.name}
                        </span>
                        {'hot' in pizza && pizza.hot && (
                          <span className="text-sm text-(--c-red)" aria-label="ostra">
                            🌶️
                          </span>
                        )}
                        {'veg' in pizza && pizza.veg && (
                          <span className="text-sm" aria-label="wegetariańska">
                            🌿
                          </span>
                        )}
                      </div>
                      <p className="m-0 mt-0.5 line-clamp-1 font-base text-xs leading-tight text-[#7a7068]">
                        {pizza.description}
                      </p>
                    </div>
                    <div className="ml-2 flex shrink-0 flex-col items-end gap-2">
                      <span className="font-heading text-lg font-bold text-(--c-red)">
                        {formatPrice(pizza.price)}
                      </span>
                      {cartItem ? (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => changeQty(pizza.id, -1)}
                            aria-label="Zmniejsz ilość"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-(--c-red) text-(--c-red) transition-colors hover:bg-(--c-red) hover:text-white"
                          >
                            <FaMinus size={9} />
                          </button>
                          <span className="w-5 text-center font-base text-sm font-bold">{cartItem.quantity}</span>
                          <button
                            type="button"
                            onClick={() => changeQty(pizza.id, 1)}
                            aria-label="Zwiększ ilość"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-(--c-red) text-white transition-colors hover:bg-red-800"
                          >
                            <FaPlus size={9} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addToCart(pizza)}
                          className="flex h-7 items-center gap-1.5 rounded-full border border-(--c-red) px-3 font-base text-xs font-bold uppercase text-(--c-red) transition-colors hover:bg-(--c-red) hover:text-white"
                        >
                          Dodaj <FaPlus size={8} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl bg-[#101010] text-white lg:sticky lg:top-6">
              <form onSubmit={handleSubmit(onDesktopSubmit)} noValidate>
                <div className="p-5 pb-4">
                  <h3 className="flex items-center gap-2 font-heading text-xl uppercase tracking-wide">
                    <FaShoppingCart size={16} />
                    Twoje zamówienie
                  </h3>
                  {cart.length === 0 ? (
                    <p className="mt-4 py-4 text-center font-base text-sm text-white/35">Twój koszyk jest pusty</p>
                  ) : (
                    <div className="mt-3">
                      <div className="flex flex-col divide-y divide-white/8">
                        {cart.map((item) => (
                          <CartItemRow
                            key={item.pizza.id}
                            item={item}
                            changeQty={changeQty}
                            removeFromCart={removeFromCart}
                          />
                        ))}
                      </div>
                      <div className="mt-2 flex items-center justify-between border-t border-white/12 pt-3">
                        <span className="font-heading text-sm uppercase tracking-wider text-white/60">Razem</span>
                        <span className="font-heading text-2xl font-bold text-(--c-red)">{formatPrice(total)}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/8 px-5 py-4">
                  <FulfillmentToggle
                    fulfillmentType={fulfillmentType}
                    onSwitch={switchFulfillment}
                    register={register}
                  />
                  {fulfillmentType === 'delivery' && <DeliveryAreasBox />}
                  <OrderFormFields
                    form={{ register, errors, watch, setValue }}
                    fulfillmentType={fulfillmentType}
                  />
                  <PaymentOptions register={register} fulfillmentType={fulfillmentType} />

                  {cartError && (
                    <div className="mt-4 rounded-lg border border-(--c-red)/40 bg-(--c-red)/8 px-4 py-3 font-base text-xs text-(--c-red)">
                      {cartError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-base mt-4 w-full border-(--c-red) bg-(--c-red) text-white hover:bg-red-800 disabled:opacity-50"
                  >
                    Złóż zamówienie →
                  </button>

                  <div className="mt-3 flex items-start gap-2 text-white/35">
                    <FaLock size={10} className="mt-0.5 shrink-0" />
                    <p className="m-0 font-base text-xs leading-relaxed">
                      Płatność realizowana przy odbiorze zamówienia. Nie obsługujemy płatności online.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          cartCount > 0 ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-[#0d0d0d] shadow-[0_-2px_16px_rgba(0,0,0,.45)]">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--c-red)">
                <FaShoppingCart size={13} className="text-white" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white font-base text-[10px] font-black text-(--c-red)">
                  {cartCount}
                </span>
              </div>
              <div className="min-w-0">
                <span className="block font-base text-sm font-bold text-white">
                  {pluralProducts(cartCount)} • {formatPrice(total)}
                </span>
                <span className="block font-base text-xs text-white/45 truncate">Min. wartość: 50 zł</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileCheckoutOpen(true)}
              className="btn-base shrink-0 border-(--c-red) bg-(--c-red) text-white hover:bg-red-800"
            >
              Zobacz koszyk
            </button>
          </div>
        </div>
      </div>

      <MobileCheckout
        isOpen={mobileCheckoutOpen}
        onClose={() => setMobileCheckoutOpen(false)}
        cart={cart}
        total={total}
        changeQty={changeQty}
        removeFromCart={removeFromCart}
        onClearCart={() => setCart([])}
        onSubmitSuccess={() => setOrderSuccess(true)}
      />
    </section>
  );
}
