import Loadable from 'react-loadable';
// eslint-disable-next-line import/extensions
import Loader from './components/Loader/Loader.jsx';

export const AsyncHomePage = Loadable({
  loader: () =>
    import('./components/Home/Home.jsx' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncAboutMePage = Loadable({
  loader: () =>
    import(
      './components/AboutMe/AboutMe.jsx' /* webpackChunkName: about-me" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncArticlesPage = Loadable({
  loader: () =>
    import(
      './components/Articles/Articles.jsx' /* webpackChunkName: "articles" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncContactUsPage = Loadable({
  loader: () =>
    import(
      './components/ContactUs/ContactUs.jsx' /* webpackChunkName: "contact-us" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncHelpPage = Loadable({
  loader: () =>
    import('./components/Help/Help.jsx' /* webpackChunkName: "help" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncHowItWorksPage = Loadable({
  loader: () =>
    import(
      './components/HowItWorks/HowItWorks.jsx' /* webpackChunkName: "how-it-works" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncLeaveTestimonialPage = Loadable({
  loader: () =>
    import(
      './components/LeaveTestimonial/LeaveTestimonial.jsx' /* webpackChunkName: "leave-testimonial" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncLicensesPage = Loadable({
  loader: () =>
    import(
      './components/Licenses/Licenses.jsx' /* webpackChunkName: "licenses" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncOurNewsPage = Loadable({
  loader: () =>
    import(
      './components/OurNews/OurNews.jsx' /* webpackChunkName: "our-news" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncPartnershipPage = Loadable({
  loader: () =>
    import(
      './components/Partnership/Partnership.jsx' /* webpackChunkName: "partnership" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncPrivacyPolicyPage = Loadable({
  loader: () =>
    import(
      './components/PrivacyPolicy/PrivacyPolicy.jsx' /* webpackChunkName: "privacy-policy" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncRelationshipsPage = Loadable({
  loader: () =>
    import(
      './components/Relationships/Relationships.jsx' /* webpackChunkName: "relationships" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncSignUpPage = Loadable({
  loader: () =>
    import('./components/SignUp/SignUp' /* webpackChunkName: "sign-up" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncTermsAndConditionsPage = Loadable({
  loader: () =>
    import(
      './components/TermsAndConditions/TermsAndConditions.jsx' /* webpackChunkName: "terms-and-conditions" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncTestimonialsPage = Loadable({
  loader: () =>
    import(
      './components/Testimonials/Testimonials.jsx' /* webpackChunkName: "testimonials" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncUsersPage = Loadable({
  loader: () =>
    import('./components/Users/Users.jsx' /* webpackChunkName: "users" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncUserPage = Loadable({
  loader: () =>
    import(
      './components/User/UserById/UserById' /* webpackChunkName: "user" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

export const AsyncRequirementsPage = Loadable({
  loader: () =>
    import(
      './components/Requirements/Requirements.jsx' /* webpackChunkName: "requirements" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});
