import { redirect } from 'next/navigation';

export default function RootPage() {
  // Karşılama sayfasına gerek olmadığı için varsayılan olarak doğrudan /yazilim sayfasına yönlendirir
  redirect('/yazilim');
}
