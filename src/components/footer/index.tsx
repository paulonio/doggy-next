import Policy from '@/components/policy';
import { Content, ContentWrapper, FooterItem, StyledLink, Wrapper } from './styled';
import EmailForm from '@/components/email-form';
import { Link } from '@/types/common';

const SERVICES_LINKS_MOCK: Link[] = [
    { href: '/blog', text: 'Blog'},
    { href: '/contact-us', text: 'Cancellations'},
    { href: '/book-appointment', text: 'Track Your Animal'},
    { href: '/blog', text: 'Luxe`s Annual Spa Day 2021'},
    { href: 'https://www.paypal.com/', text: 'Payment Options'},
];

const NAVIGATION_LINKS_MOCK: Link[] = [
    { href: '/', text: 'Home'},
    { href: '/about-us', text: 'About Us'},
    { href: '/contact-us', text: 'Contact Us'},
    { href: '/contact-us', text: 'FAQs'},
    { href: '/contact-us', text: 'Help with navigation'},
];

const Footer = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <FooterItem>
                        <h4>Customer Service</h4>
                        {SERVICES_LINKS_MOCK.map(({ href, text }) => {
                            return (
                                <StyledLink href={href} key={text} $size='m'>{text}</StyledLink>
                            );
                        })}
                    </FooterItem>
                    <FooterItem>
                        <EmailForm />
                        <div>
                            <h4>Connect With Us On Social Media</h4>
                            Socials
                        </div>
                    </FooterItem>
                    <FooterItem>
                        <h4>Navigation</h4>
                        {NAVIGATION_LINKS_MOCK.map(({ href, text }) => {
                            return (
                                <StyledLink href={href} key={text} $size='s'>{text}</StyledLink>
                            );
                        })}
                    </FooterItem>
                </Content>
            </ContentWrapper>
            <Policy />
        </Wrapper>
    );
}
 
export default Footer;