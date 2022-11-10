import { parseISO, format } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'PPP (eee)', { locale: ja })}
    </time>
  );
}
