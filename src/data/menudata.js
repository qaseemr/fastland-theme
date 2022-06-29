// import menuImage from '../assets/image/menu-image.webp'

export const menuItems = [
         {
           name: "",
           label: "Landings",
           items: [
             { name: "", label: "Marketing" },
             { name: "project", label: "Project Management" },
             { name: "it", label: "IT Services" },
             { name: "services", label: "Services" },
             { name: "agency", label: "Agency" },
             { name: "digital", label: "Digital Agency" },
             { name: "app", label: "App Presenting" },
             { name: "startup", label: "Startup" },
           ],
         },
         {
           name: "pages",
           label: "Pages",
           items: [
             { name: "about-us", label: "About Us" },
             {
               name: "#",
               label: "Blog",
               items: [
                 { name: "blogs-reguler", label: "Blog Regular" },
                 { name: "blogs-left-sidebar", label: "Blog Left Sidebar" },
                 { name: "blogs-right-sidebar", label: "Blog Right Sidebar" },
                 { name: "blogs-details", label: "Blog Details" },
               ],
             },
             {
               name: "careers",
               label: "Careers",
               items: [
                 { name: "career", label: "Career" },
                 { name: "career-details", label: "Career Details" },
               ],
             },
             {
               name: "#",
               label: "Pricing",
               items: [
                 { name: "pricing-1", label: "Pricing One" },
                 { name: "pricing-2", label: "Pricing Two" },
               ],
             },
             {
               name: "#",
               label: "Contact",
               items: [
                 { name: "contact-1", label: "Contact One" },
                 { name: "contact-2", label: "Contact Two" },
               ],
             },
             {
               name: "#",
               label: "Account",
               items: [
                 { name: "sign-in", label: "Sign In" },
                 { name: "sign-up", label: "Sign Up" },
                 { name: "forgot", label: "Reset Password" },
               ],
             },
             {
               name: "Testimonial",
               label: "Testimonial",
               items: [
                 { name: "testimonials-1", label: "Testimonial One" },
                 { name: "testimonials-2", label: "Testimonial Two" },
               ],
             },
             {
               name: "utility",
               label: "Utility",
               items: [
                 { name: "faq", label: "FAQ" },
                 { name: "coming-soon", label: "Coming soon" },
                 { name: "terms", label: "Terms & Conditions" },
                 { name: "404", label: "404 Page" }
               ],
             },
           ],
         },
         {
           name: "megamenu",
           label: "Portfolios",
           megamenu:true,
           col:12,
           items: {
            //  image:{
            //   url:menuImage,
            //   col:"5",
            //  },
             col_1 : {
              title:"GALLERY STYLE",
              items:[
                {
                 name: "portfolio-grid-2",
                 label: "Two Column Grid",
                },
                {
                 name: "portfolio-grid-3",
                 label: "Three Column Grid",
                },
                {
                 name: "portfolio-grid-4",
                 label: "Four Column Grid",
                },
                {
                 name: "portfolio-grid-2-full",
                 label: "Two Column Grid Wide",
                },
                {
                 name: "portfolio-grid-3-full",
                 label: "Three Column Grid Wide",
                },
                {
                 name: "portfolio-grid-4-full",
                 label: "Four Column Grid Wide",
                },
               ]
             },
             col_2 : {
              title:"GALLERY (NO GAP)",
              items:[
                {
                 name: "portfolio-grid-2-no-gap",
                 label: "Two Column Grid",
                },
                {
                 name: "portfolio-grid-3-no-gap",
                 label: "Three Column Grid",
                },
                {
                 name: "portfolio-grid-4-no-gap",
                 label: "Four Column Grid",
                },
                {
                 name: "portfolio-grid-2-no-gap-full",
                 label: "Two Column Grid Wide",
                },
                {
                 name: "portfolio-grid-3-no-gap-full",
                 label: "Three Column Grid Wide",
                },
                {
                 name: "portfolio-grid-4-no-gap-full",
                 label: "Four Column Grid Wide",
                },
               ]
             },
             col_3 : {
              title:"MASONRY STYLE",
              items:[
                {
                 name: "portfolio-masonary-2",
                 label: "Two Column Masonary",
                },
                {
                 name: "portfolio-masonary-3",
                 label: "Three Column Masonary",
                },
                {
                 name: "portfolio-masonary-4",
                 label: "Four Column Masonary",
                },
                {
                 name: "portfolio-masonary-2-full",
                 label: "Two Column Masonary Wide",
                },
                {
                 name: "portfolio-masonary-3-full",
                 label: "Three Column Masonary Wide",
                },
                {
                 name: "portfolio-masonary-4-full",
                 label: "Four Column Masonary Wide",
                },
               ]
             },
             col_4 : {
              title:"PORTFOLIO DETAILS",
              items:[
                {
                 name: "portfolio-details-1",
                 label: "Portfolio Details 01",
                },
                {
                 name: "portfolio-details-2",
                 label: "Portfolio Details 02",
                },
                {
                 name: "portfolio-details-3",
                 label: "Portfolio Details 03",
                },
               ]
             },
            //  col_6 : [
            //    {
            //     name: "supa",
            //     label: "supa",
            //    },
            //    {
            //     name: "Mega",
            //     label: "Mega",
            //    },
            //    {
            //     name: "menu",
            //     label: "Menu",
            //    },
            //    {
            //     name: "lele",
            //     label: "LEle",
            //    }
            //   ]
           }
         },
         {
           name: "https://uxtheme.net/product-support/",
           label: "Support",
           isExternal: true,
         },
       ];
export default menuItems;