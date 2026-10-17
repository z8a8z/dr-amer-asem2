/**
 * Dr. Amer Esam Clinic - Site 2: Bold Dynamic Showcase
 * Clean Lightweight Vanilla JS
 * Zero external library dependencies, Zero console errors
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Mobile Menu Drawer Navigation
  var toggleBtn = document.querySelector('.mobile-toggle-btn');
  var mobileDrawer = document.querySelector('.mobile-nav-drawer');
  var closeBtn = document.querySelector('.drawer-close-btn');

  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    var drawerLinks = mobileDrawer.querySelectorAll('.drawer-link-item');
    drawerLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Sticky Navbar Glassmorphism
  var header = document.querySelector('.dynamic-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 3. FAQ Accordion Toggle
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', function() {
        var isOpen = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(function(otherItem) {
          otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Fast WhatsApp Booking Dispatcher
  var bookingForm = document.getElementById('fastBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var nameInput = document.getElementById('fast_name');
      var phoneInput = document.getElementById('fast_phone');
      var serviceInput = document.getElementById('fast_service');
      var doctorInput = document.getElementById('fast_doctor');

      var name = nameInput ? nameInput.value.trim() : '';
      var phone = phoneInput ? phoneInput.value.trim() : '';
      var service = serviceInput ? serviceInput.value : '';
      var doctor = doctorInput ? doctorInput.value : '';

      var text = 'مرحباً دكتور عامر عصام، أود حجز موعد عبر الموقع:\n';
      text += '• الاسم: ' + (name || 'غير محدد') + '\n';
      text += '• الهاتف: ' + (phone || 'غير محدد') + '\n';
      text += '• الخدمة: ' + (service || 'استشارة عامة') + '\n';
      if (doctor) {
        text += '• الطبيب: ' + doctor + '\n';
      }

      var waLink = 'https://wa.me/9647806679789?text=' + encodeURIComponent(text);
      window.open(waLink, '_blank');
    });
  }

  // 5. Active Nav Pill highlighting on scroll
  var navLinks = document.querySelectorAll('.nav-pill-link');
  var sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset + 140;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
