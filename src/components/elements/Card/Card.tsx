import { PropsVoid } from '../../../models.ts';

export interface CardProps extends PropsVoid {
  header?: React.ReactNode;
  titleImg?: {
    src: string;
    alt: string;
  };
  content: React.ReactNode;
  footer?: React.ReactNode;
}

function Card({ className, content, header, titleImg, footer }: CardProps) {
  return (
    <div className={`${className || ''} card`} role="group">
      {header && <div className="card_header">{header}</div>}
      {titleImg && (
        <img className="card_image" src={titleImg.src} alt={titleImg.alt} />
      )}
      <div className="card_body">{content}</div>
      {footer && <div className="card_footer">{footer}</div>}
    </div>
  );
}

export default Card;
