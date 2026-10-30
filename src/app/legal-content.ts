export type LegalPageContent = {
  title: string;
  description: string;
  updated: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const legalPages: Record<string, LegalPageContent> = {
  privacy: {
    "title": "Privacy Policy",
    "description": "How WRINGG handles information in its customer app, partner app, website and clothing-care operations.",
    "updated": "October 30, 2026",
    "sections": [
      {
        "heading": "About this notice",
        "body": [
          "WRINGG coordinates clothing-care services in supported Bengaluru neighbourhoods. This notice covers customer and partner accounts, orders, our website and support channels. Availability depends on your address and partner capacity.",
          "Contact us about privacy or account data at hello@wringg.in, by phone or WhatsApp on +91 84385 08211, or through the Contact page."
        ]
      },
      {
        "heading": "Accounts, orders and support",
        "body": [
          "We collect the phone number used to sign in, profile details you provide, saved pickup and delivery addresses, service selections, garment counts, order notes and order activity. We keep records needed to coordinate bookings, assignment, pickup, processing, delivery and customer support.",
          "Cash-at-delivery records include the payable amount, the assigned partner's acknowledgement and delivery confirmation. Order, receipt, earnings, settlement and dispute records support reconciliation and operational accountability. Existing online-payment records, where present, are handled separately from new cash bookings.",
          "If you contact us by WhatsApp, phone or email, we receive the information you share. Those communication services also handle information under their own policies."
        ]
      },
      {
        "heading": "Location and serviceability",
        "body": [
          "With your device permission, the apps use location to help identify an address, check serviceability or match an on-duty partner with nearby work. Customer saved addresses and partner work locations may be stored with their accounts and order records.",
          "The current app configurations use foreground location rather than background location. You can control device permissions in your phone's settings. Denying access may limit location-dependent features; use the address options offered in your app or contact support.",
          "Location and address information may be processed by mapping and geocoding services and shared with the assigned partners and staff who coordinate the service."
        ]
      },
      {
        "heading": "Partner verification and payouts",
        "body": [
          "Partner onboarding collects work and machine details, service capabilities, availability, location and verification information. Identity verification uses Didit, which may process identity documents, camera or liveness information and verification results as part of its verification flow.",
          "Partner payout details, such as UPI or bank information, are used to set up and reconcile payouts. Verification, approval, operational eligibility and payout release are separate processes.",
          "Didit and other service providers may retain their own records under their terms and policies. Closing a WRINGG login does not automatically erase every provider-held copy; requests affecting those records need separate review."
        ]
      },
      {
        "heading": "Photos, device tokens and notifications",
        "body": [
          "Partners capture required pickup and receipt photographs for the relevant order. These are stored as service evidence with restricted access; they are not public gallery posts. Avoid including identity documents or other unnecessary personal information in order-proof photos.",
          "The apps may register a device notification token to send order or account updates. Camera, photo-library, microphone and notification permissions depend on the feature and platform. Verification permissions and order-photo permissions are used for their stated purposes."
        ]
      },
      {
        "heading": "Referral links and optional analytics",
        "body": [
          "Referral and campaign links can associate a referral code or link with an account and its subsequent order activity. Business referral and order records are distinct from optional interaction analytics.",
          "Optional interaction collection and analytics export remain disabled for this launch until configured. Where optional analytics are enabled, the app provides a choice and allows withdrawal. Optional analytics are not required to book or fulfil an order.",
          "The implemented referral reporting does not establish verified store downloads, and a campaign placement is not a measurement of a visitor's physical location. We do not sell personal information."
        ]
      },
      {
        "heading": "Providers, access and security",
        "body": [
          "We use service providers for hosting, authentication, database and file storage, maps, identity verification and notifications. These include Supabase, Google services, Didit and Expo or platform notification services, depending on the feature. If optional analytics export is enabled, its configured provider also processes the permitted event data.",
          "Assigned service partners and authorized staff receive the information needed for fulfilment, support, verification or finance. Provider infrastructure may process operational and security logs. Access controls and private storage reduce exposure, but no online system can promise absolute security."
        ]
      },
      {
        "heading": "Retention and deletion",
        "body": [
          "You can request correction or account deletion through the options in your app or by contacting support. A deletion request and completed deletion are different stages. Existing orders, unresolved disputes, unpaid amounts and unsettled partner obligations may need resolution before account closure can finish.",
          "The account-deletion process removes or anonymizes core profile/contact details, saved addresses and locations, payout details, device tokens, login-session information and specified optional analytics linkage, then closes the login. It keeps a non-login relational identifier so retained transactions and audit records remain consistent.",
          "Order and proof records, payment and cash records, earnings and settlement records, immutable audit/history records, fraud-related records and partner verification documents are not automatically erased by that process. There is currently no fixed automatic expiry for those retained categories. This is a description of current retention, not a claim that every retained item must be kept by law. Contact support for a separate review of data in these categories.",
          "Raw referral visits and optional interaction events have a configured 90-day cleanup policy. Durable referral ownership, installation linkage and business/audit records are separate. The retention setup and deletion of provider-held or previously exported data require separate operational checks; completion of account closure does not by itself confirm those copies were erased."
        ]
      },
      {
        "heading": "Your choices and contacting us",
        "body": [
          "You can change device permissions, update details offered in the app, withdraw optional analytics consent where available, and ask support about correction, deletion or retained data. Please do not email identity documents, bank credentials, passwords or OTPs unless a verified support process specifically requires an appropriate secure method.",
          "For the account-deletion process and the limits of retained records, see the Delete Account page. We update this notice when our data handling changes; check the date at the top."
        ]
      }
    ]
  },
  terms: {
    title: "Terms & Conditions",
    description: "Simple usage terms for WRINGG customers and local partners.",
    updated: "May 24, 2026",
    sections: [
      {
        heading: "Service usage",
        body: [
          "WRINGG is operating a hyperlocal clothing-care pilot in selected service zones starting with BTM Layout, Bengaluru.",
          "By booking a service, you agree to provide accurate contact, address, and garment information so pickup, care, and delivery can be coordinated.",
        ],
      },
      {
        heading: "Customer responsibility",
        body: [
          "Please remove valuables, cash, documents, electronics, and delicate items from pockets before handing over clothes.",
          "Customers should point out special care instructions, stains, fabric concerns, or damage before pickup.",
        ],
      },
      {
        heading: "Service limitations",
        body: [
          "Pickup, delivery, partner availability, pricing, and timelines may vary during the pilot and across service zones.",
          "WRINGG may decline or reschedule orders that are outside the active service zone, unsuitable for available care methods, or operationally unavailable.",
        ],
      },
    ],
  },
  refund: {
    title: "Refund & Cancellation Policy",
    description: "How WRINGG handles cancellations, refunds, and order concerns.",
    updated: "May 24, 2026",
    sections: [
      {
        heading: "Cancellations",
        body: [
          "You may request cancellation before pickup confirmation or before the service process begins. Once clothes are collected or processing has started, cancellation may not always be possible.",
        ],
      },
      {
        heading: "Refunds",
        body: [
          "Refunds are reviewed case by case based on order status, service issue, payment status, and operational records.",
          "Approved refunds may be issued through the original payment method or another mutually agreed method.",
        ],
      },
      {
        heading: "Service concerns",
        body: [
          "Please contact WRINGG as soon as possible if there is a concern with an order. We will review the matter and try to resolve it fairly during the pilot.",
        ],
      },
    ],
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    description: "Pickup and delivery details for WRINGG clothing-care orders.",
    updated: "May 24, 2026",
    sections: [
      {
        heading: "Pickup and drop",
        body: [
          "WRINGG coordinates doorstep pickup and delivery within active service zones. The pilot is currently focused on BTM Layout, Bengaluru.",
          "Pickup and delivery times are estimated and may depend on partner availability, order volume, weather, traffic, and service-zone coverage.",
        ],
      },
      {
        heading: "Timelines",
        body: [
          "Estimated timelines will be shared during booking or order confirmation. Exact timelines are not guaranteed during the pilot.",
        ],
      },
      {
        heading: "Service zone limits",
        body: [
          "Orders outside active service zones may be declined, rescheduled, or handled only if operationally feasible.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact WRINGG",
    description: "Reach WRINGG for bookings, partner interest, and support.",
    updated: "May 24, 2026",
    sections: [
      {
        heading: "Support",
        body: [
          "WhatsApp or phone: +91 84385 08211",
          "Email: hello@wringg.in",
          "Location: BTM Layout, Bengaluru",
        ],
      },
      {
        heading: "Bookings and partners",
        body: [
          "Customers can contact us for pickup, wash, iron, and delivery requests within active service zones.",
          "Local partners and home-based hosts can contact us to join the BTM pilot partner network.",
        ],
      },
    ],
  },
  deletion: {
    "title": "Delete Your WRINGG Account",
    "description": "How to request account closure, what happens next, and which records are retained.",
    "updated": "October 30, 2026",
    "sections": [
      {
        "heading": "Request deletion",
        "body": [
          "In an updated WRINGG customer or partner app, open Profile and choose Delete account, read the notice and confirm the request. If that option is not available in your installed version or you cannot sign in, contact hello@wringg.in or phone/WhatsApp +91 84385 08211. Use the subject Account deletion request and provide the phone number registered to your account so support can arrange identity verification.",
          "Do not include passwords, login or delivery OTPs, identity-document images or bank credentials in an email. We may need to verify that the request concerns your own account. The public support route is available whether or not you can use the app."
        ]
      },
      {
        "heading": "A request is not immediate deletion",
        "body": [
          "The app records your deletion request and shows its status. Once requested, new bookings or new partner assignments are blocked, while existing access may remain to finish outstanding service and payment responsibilities.",
          "Orders in progress, unpaid amounts, unresolved complaints or refunds, payment exceptions and unsettled partner earnings or payout items may delay completion. Request processing also depends on the account-deletion service being available. We do not promise a fixed completion time here; contact support for the status of a delayed request.",
          "A pending or processing message does not mean your account or data has already been deleted. The completed account-closure stage means the login was closed after the core account cleanup, subject to the retained records and provider limitations below."
        ]
      },
      {
        "heading": "Core information removed or anonymized",
        "body": [
          "The implemented account-cleanup process removes or replaces core profile names, contact details, saved addresses and locations, payout details, onboarding draft details, notification tokens, login-session information and specified optional analytics linkage before closing the login.",
          "A non-login relational identifier remains to preserve references in existing transactions and immutable audit/history records. Closing the login prevents using that login as an active WRINGG account; it does not erase the retained record categories below."
        ]
      },
      {
        "heading": "Records not automatically erased",
        "body": [
          "Existing order and photo-proof records, payment and cash records, earnings/settlement records, immutable audits and state history, fraud-related records and partner verification documents remain outside automatic account cleanup. These categories currently have no fixed automatic expiry.",
          "Some records may be needed for ongoing transactions, disputes or applicable recordkeeping duties, but this notice does not assert that indefinite retention of every record is legally required. Contact support to request a separate review of retained information.",
          "Didit-held verification data, other provider-held records and data already exported to an analytics provider are not automatically deleted by closing your WRINGG login. Those copies need separate provider/operational review. Raw referral visits and optional interaction events follow a configured 90-day cleanup policy; durable referral, business and audit records are separate."
        ]
      },
      {
        "heading": "Help and privacy questions",
        "body": [
          "For correction requests, delayed deletion, retained records or provider-held information, email hello@wringg.in or contact +91 84385 08211 by phone or WhatsApp.",
          "Read the Privacy Policy for the information used in customer service, partner verification, order proof, notifications and optional analytics. Do not treat a support email, logout or pending request as confirmation of completed deletion."
        ]
      }
    ]
  },
};
