import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'property-images',
    loadChildren: () => import('./property-images/property-images.module').then(m => m.PropertyImagesPageModule) },
  {
    path: 'services/detail/:serviceid/gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryPageModule) },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesPageModule) },
  {
    path: 'ratings',
    loadChildren: () => import('./ratings/ratings.module').then(m => m.RatingsPageModule) },
  {
    path: 'services/detail/:serviceid',
    loadChildren: () => import('./services/detail/detail.module').then(m => m.DetailPageModule) },
  {
    path: 'underreview',
    loadChildren: () => import('./underreview/underreview.module').then(m => m.UnderreviewPageModule) },
  {
    path: 'services/jha',
    loadChildren: () => import('./services/jha/jha.module').then(m => m.JhaPageModule) },
  {
    path: 'services/jha-hospital',
    loadChildren: () => import('./services/jha-hospital/jha-hospital.module').then(m => m.JhaHospitalPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
