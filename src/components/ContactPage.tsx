import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { BOUTIQUES } from '../data/products';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    boutique: 'London',
    date: '',
    time: '14:00',
    service: 'Bespoke Suiting Consultation',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointment.name || !appointment.email || !appointment.date) {
      showToast('Please fill out all mandatory appointment fields');
      return;
    }
    setBookingConfirmed(true);
    showToast(`Appointment requested at our ${appointment.boutique} Atelier`);
  };

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Concierge & Fitting Salons
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Client Care & Private Appointments
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
            Schedule a private fitting consultation with our master tailors or connect with our international client service desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Boutique Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
              Flagship Salons
            </h2>
            <div className="space-y-4">
              {BOUTIQUES.map((b) => (
                <div key={b.city} className="p-5 bg-[#141418] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-bold text-white uppercase tracking-wider">
                      {b.city} Atelier
                    </span>
                    <span className="text-[10px] text-[#C5A880] uppercase tracking-widest">{b.type}</span>
                  </div>
                  <div className="text-xs text-neutral-300 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{b.phone}</span>
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{b.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-7 bg-[#141418] border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-2 font-medium">
              <Calendar className="w-4 h-4" />
              <span>Private Fitting Request</span>
            </div>

            <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-white mb-2">
              Reserve a Private Consultation
            </h2>
            <p className="text-xs text-neutral-400 font-light mb-6 leading-relaxed">
              Experience one-on-one garment drafting, fabric drape selection from over 400 European mills, and personal styling by our head cutter.
            </p>

            {bookingConfirmed ? (
              <div className="p-8 bg-[#181820] border border-[#C5A880]/40 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
                <h3 className="font-serif text-xl font-bold uppercase text-white tracking-wider">
                  Consultation Request Received
                </h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{appointment.name}</strong>. Our VIP Concierge Desk will confirm your appointment at our <strong className="text-[#C5A880]">{appointment.boutique} Atelier</strong> for {appointment.date} at {appointment.time}.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-6 py-2.5 border border-white/20 text-xs text-neutral-300 hover:text-white uppercase tracking-wider mt-4"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={appointment.name}
                      onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                      placeholder="e.g. Lord Julian Sterling"
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={appointment.email}
                      onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}
                      placeholder="julian@sterling.com"
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={appointment.phone}
                      onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                      placeholder="+44 20 7946 0912"
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Select Boutique Atelier *
                    </label>
                    <select
                      value={appointment.boutique}
                      onChange={(e) => setAppointment({ ...appointment, boutique: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Lahore" className="bg-[#141418]">Lahore (MM Alam Road, Gulberg)</option>
                      <option value="Karachi" className="bg-[#141418]">Karachi (Zamzama Commercial, DHA)</option>
                      <option value="Islamabad" className="bg-[#141418]">Islamabad (Beverly Centre, Blue Area)</option>
                      <option value="Dubai" className="bg-[#141418]">Dubai (Fashion Avenue, The Dubai Mall)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={appointment.date}
                      onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Sartorial Service
                    </label>
                    <select
                      value={appointment.service}
                      onChange={(e) => setAppointment({ ...appointment, service: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Bespoke Shalwar Kameez Drafting" className="bg-[#141418]">Bespoke Shalwar Kameez Drafting</option>
                      <option value="Bridal Groom Sherwani & Tilla Work" className="bg-[#141418]">Bridal Groom Sherwani & Tilla Work</option>
                      <option value="Jamawar Festive Waistcoat Fitting" className="bg-[#141418]">Jamawar Festive Waistcoat Fitting</option>
                      <option value="Complimentary Post-Purchase Fitting" className="bg-[#141418]">Post-Purchase Fitting & Alterations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                    Special Requests or Fabric Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={appointment.notes}
                    onChange={(e) => setAppointment({ ...appointment, notes: e.target.value })}
                    placeholder="e.g. Inquiring about Super 180s fabrics or Black Tie dinner suit."
                    className="w-full bg-black/40 border border-white/15 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST APPOINTMENT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
