'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaChevronDown,
  FaCreditCard,
  FaHome,
  FaLock,
  FaMapMarkerAlt,
  FaMinus,
  FaMoneyBillWave,
  FaPhone,
  FaPlus,
  FaShoppingCart,
  FaTimes,
  FaTruck,
  FaUser,
} from 'react-icons/fa';
import { deliveryAreas } from '../../features/order/order-data';
import { orderSchema } from '../../features/order/order-schema';
import type { CartItem, OrderFormData } from '../../features/order/order-types';
import { formatPrice } from '../../features/order/order-utils';

const inputCls =
  'w-full rounded-lg bg-[#1c1c1c] border border-white/12 py-3 px-4 font-base text-sm text-white placeholder:text-white/35 focus:border-(--c-red) focus:outline-none transition-colors';

const inputWithIconCls =
  'w-full rounded-lg bg-[#1c1c1c] border border-white/12 py-3 pl-9 pr-4 font-base text-sm text-white placeholder:text-white/35 focus:border-(--c-red) focus:outline-none transition-colors';

export function CartItemRow({
  item,
  changeQty,
  removeFromCart,
}: {
  item: CartItem;
  changeQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 py-2.5">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#1a100a]">
        <Image src="/pizza-hero.png" alt={item.pizza.name} fill sizes="40px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-heading text-sm font-semibold uppercase leading-tight">{item.pizza.name}</div>
        <div className="font-base text-xs text-white/40">32 cm</div>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={() => changeQty(item.pizza.id, -1)}
          aria-label="Zmniejsz"
          className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-white/70 hover:text-white"
        >
          <FaMinus size={8} />
        </button>
        <span className="w-5 text-center font-base text-sm font-bold">{item.quantity}</span>
        <button
          type="button"
          onClick={() => changeQty(item.pizza.id, 1)}
          aria-label="Zwiększ"
          className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-white/70 hover:text-white"
        >
          <FaPlus size={8} />
        </button>
      </div>
      <span className="ml-1 shrink-0 font-heading text-sm font-bold text-brand-gold">
        {formatPrice(item.pizza.price * item.quantity)}
      </span>
      <button
        type="button"
        onClick={() => removeFromCart(item.pizza.id)}
        aria-label={`Usuń ${item.pizza.name}`}
        className="ml-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white/30 transition-colors hover:text-white/70"
      >
        <FaTimes size={10} />
      </button>
    </div>
  );
}

export function FulfillmentToggle({
  fulfillmentType,
  onSwitch,
  register,
}: {
  fulfillmentType: 'delivery' | 'pickup';
  onSwitch: (t: 'delivery' | 'pickup') => void;
  register: UseFormRegister<OrderFormData>;
}) {
  return (
    <div className="mb-4">
      <p className="mb-2 font-heading text-xs uppercase tracking-widest text-white/50">
        Sposób odbioru
      </p>
      <div className="grid grid-cols-2 gap-2">
        {(['delivery', 'pickup'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onSwitch(type)}
            className={`flex items-center justify-center gap-2 rounded-xl border py-3 font-base text-xs font-bold uppercase transition-all ${
              fulfillmentType === type
                ? 'border-(--c-red) bg-(--c-red) text-white'
                : 'border-white/18 text-white/55 hover:border-white/35'
            }`}
          >
            {type === 'delivery' ? <FaTruck size={13} /> : <FaHome size={13} />}
            {type === 'delivery' ? 'Dostawa' : 'Odbiór osobisty'}
          </button>
        ))}
      </div>
      <input type="hidden" {...register('fulfillmentType')} />
    </div>
  );
}

export function DeliveryAreasBox() {
  return (
    <div className="mb-4 rounded-xl border border-brand-gold/25 bg-brand-gold/5 p-4">
      <div className="mb-3 flex items-center gap-2">
        <FaTruck size={11} className="text-brand-gold" />
        <span className="font-heading text-xs uppercase tracking-widest text-brand-gold">
          Obszar dostawy
        </span>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {deliveryAreas.map((area) => (
          <div key={area.id} className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-brand-gold">✓</span>
            <span className="font-base text-xs text-white/75">
              {area.label}
              {area.minOrder === 70 && <span className="text-white/40"> (od 70 zł)</span>}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2 rounded-lg border border-brand-gold/15 bg-brand-gold/8 px-3 py-2">
        <span className="mt-0.5 shrink-0 font-base text-xs text-brand-gold/70">ℹ</span>
        <p className="m-0 font-base text-xs leading-relaxed text-white/50">
          Minimalna wartość zamówienia: <strong className="text-brand-gold/80">50 zł</strong>
          <br />
          <strong className="text-brand-gold/80">70 zł</strong> dla Brzozowa
        </p>
      </div>
    </div>
  );
}

export interface FormMethods {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
  setValue: UseFormSetValue<OrderFormData>;
}

export function OrderFormFields({
  form,
  fulfillmentType,
}: {
  form: FormMethods;
  fulfillmentType: 'delivery' | 'pickup';
}) {
  const { register, errors } = form;
  return (
    <div className="flex flex-col gap-3">
      <p className="font-heading text-xs uppercase tracking-widest text-white/50">
        {fulfillmentType === 'delivery' ? 'Dane do dostawy' : 'Dane kontaktowe'}
      </p>

      {fulfillmentType === 'delivery' && (
        <div>
          <div className="relative">
            <FaMapMarkerAlt size={12} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
            <select {...register('locality')} className={`${inputWithIconCls} cursor-pointer appearance-none pr-9`}>
              <option value="" disabled>
                Wybierz miejscowość *
              </option>
              {deliveryAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
            <FaChevronDown size={10} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35" />
          </div>
          {errors.locality && (
            <p className="mt-1 font-base text-xs text-(--c-red)">{errors.locality.message}</p>
          )}
        </div>
      )}

      <div>
        <div className="relative">
          <FaUser size={12} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
          <input {...register('name')} placeholder="Imię i nazwisko *" autoComplete="name" className={inputWithIconCls} />
        </div>
        {errors.name && <p className="mt-1 font-base text-xs text-(--c-red)">{errors.name.message}</p>}
      </div>

      <div>
        <div className="relative">
          <FaPhone size={12} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
          <input {...register('phone')} type="tel" placeholder="Numer telefonu *" autoComplete="tel" className={inputWithIconCls} />
        </div>
        {errors.phone && <p className="mt-1 font-base text-xs text-(--c-red)">{errors.phone.message}</p>}
      </div>

      {fulfillmentType === 'delivery' && (
        <>
          <div>
            <div className="relative">
              <FaMapMarkerAlt size={12} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
              <input {...register('street')} placeholder="Ulica i numer domu *" autoComplete="street-address" className={inputWithIconCls} />
            </div>
            {errors.street && <p className="mt-1 font-base text-xs text-(--c-red)">{errors.street.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input {...register('zip')} placeholder="Kod pocztowy *" autoComplete="postal-code" className={inputCls} />
              {errors.zip && <p className="mt-1 font-base text-xs text-(--c-red)">{errors.zip.message}</p>}
            </div>
            <input {...register('apartment')} placeholder="Nr mieszkania / lokalu" className={inputCls} />
          </div>
        </>
      )}

      <textarea
        {...register('notes')}
        placeholder="Uwagi do zamówienia (opcjonalnie)"
        rows={2}
        className={`${inputCls} resize-none`}
      />
    </div>
  );
}

export function PaymentOptions({
  register,
  fulfillmentType,
}: {
  register: UseFormRegister<OrderFormData>;
  fulfillmentType: 'delivery' | 'pickup';
}) {
  const opts = [
    {
      value: 'cash' as const,
      label: fulfillmentType === 'delivery' ? 'Gotówką przy dostawie' : 'Gotówką przy odbiorze',
      icon: <FaMoneyBillWave size={13} />,
    },
    {
      value: 'card' as const,
      label: fulfillmentType === 'delivery' ? 'Kartą przy dostawie' : 'Kartą przy odbiorze',
      icon: <FaCreditCard size={13} />,
    },
  ];

  return (
    <div className="mt-4">
      <p className="mb-2 font-heading text-xs uppercase tracking-widest text-white/50">
        Sposób płatności
      </p>
      <div className="flex flex-col gap-2">
        {opts.map((opt) => (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/12 px-4 py-3 transition-colors has-checked:border-(--c-red) has-checked:bg-(--c-red)/10"
          >
            <input type="radio" value={opt.value} {...register('payment')} className="accent-(--c-red)" />
            <span className="text-brand-gold">{opt.icon}</span>
            <span className="font-base text-sm font-semibold">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export interface MobileCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  changeQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  onClearCart: () => void;
  onSubmitSuccess: () => void;
}

export function MobileCheckout({
  isOpen,
  onClose,
  cart,
  total,
  changeQty,
  removeFromCart,
  onClearCart,
  onSubmitSuccess,
}: MobileCheckoutProps) {
  const [cartError, setCartError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    if (!isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  function switchFulfillment(type: 'delivery' | 'pickup') {
    setValue('fulfillmentType', type, { shouldValidate: false });
    if (type === 'pickup') {
      setValue('locality', '');
      setValue('street', '');
      setValue('zip', '');
      setValue('apartment', '');
    }
  }

  function onSubmit(data: OrderFormData) {
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
    setIsSuccess(true);
    onSubmitSuccess();
    onClearCart();
    reset();
  }

  return (
    <div
      className={`fixed inset-0 z-60 flex flex-col bg-[#101010] text-white transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
        <button
          type="button"
          onClick={() => {
            if (isSuccess) {
              setIsSuccess(false);
            }
            onClose();
          }}
          className="flex items-center gap-2 font-base text-sm font-semibold text-white/65 transition-colors hover:text-white"
        >
          <FaArrowLeft size={13} />
          {isSuccess ? 'Wróć do menu' : 'Zamknij'}
        </button>
        {!isSuccess && (
          <span className="font-heading text-sm uppercase tracking-wide text-white/50">Zamówienie</span>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--c-green)/20 text-(--c-green) text-4xl">
              ✓
            </div>
            <h2 className="m-0 font-heading text-4xl uppercase">Dziękujemy!</h2>
            <p className="mt-3 font-base text-base font-semibold text-white/70">
              Twoje zamówienie zostało przyjęte.
            </p>
            <p className="mt-5 font-base text-sm text-white/45 leading-relaxed">
              O postępach zamówienia poinformujemy Cię telefonicznie.
              <br />
              Przewidywany czas dostawy: <strong className="text-white/70">45-60 min</strong>
            </p>
            <div className="mt-8 flex w-full flex-col gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="btn-base w-full border-white/20 text-white hover:border-white/40"
              >
                Wróć do menu
              </button>
              <a
                href="tel:+48695561593"
                className="btn-base w-full border-(--c-red) bg-(--c-red) text-white"
              >
                Zadzwoń do nas
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 px-4 py-5">
            <div>
              <h3 className="flex items-center gap-2 font-heading text-xl uppercase tracking-wide">
                <FaShoppingCart size={16} />
                Twoje zamówienie
              </h3>

              {cart.length === 0 ? (
                <p className="mt-4 py-4 text-center font-base text-sm text-white/35">Twój koszyk jest pusty</p>
              ) : (
                <div className="mt-3 divide-y divide-white/8">
                  {cart.map((item) => (
                    <CartItemRow
                      key={item.pizza.id}
                      item={item}
                      changeQty={changeQty}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                  <div className="flex items-center justify-between pt-3">
                    <span className="font-heading text-sm uppercase tracking-wider text-white/60">Razem</span>
                    <span className="font-heading text-2xl font-bold text-(--c-red)">{formatPrice(total)}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <FulfillmentToggle
                fulfillmentType={fulfillmentType}
                onSwitch={switchFulfillment}
                register={register}
              />
              {fulfillmentType === 'delivery' && <DeliveryAreasBox />}
            </div>

            <OrderFormFields
              form={{ register, errors, watch, setValue }}
              fulfillmentType={fulfillmentType}
            />

            <PaymentOptions register={register} fulfillmentType={fulfillmentType} />

            {cartError && (
              <div className="rounded-lg border border-(--c-red)/40 bg-(--c-red)/8 px-4 py-3 font-base text-xs text-(--c-red)">
                {cartError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-base w-full border-(--c-red) bg-(--c-red) text-white hover:bg-red-800 disabled:opacity-50"
            >
              Złóż zamówienie →
            </button>

            <div className="flex items-start gap-2 pb-4 text-white/35">
              <FaLock size={10} className="mt-0.5 shrink-0" />
              <p className="m-0 font-base text-xs leading-relaxed">
                Płatność realizowana przy odbiorze zamówienia. Nie obsługujemy płatności online.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
