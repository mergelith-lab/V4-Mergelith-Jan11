# DNS Configuration Records for mergelith.com

The following records are required for email deliverability and security (DKIM/DMARC).

## CNAME Records (DKIM)

| Type  | Host Name                       | Value                          | Status |
|-------|---------------------------------|--------------------------------|--------|
| CNAME | `ctct1._domainkey.mergelith.com` | `100._domainkey.dkim1.ccsend.com` | Valid Record Found |
| CNAME | `ctct2._domainkey.mergelith.com` | `200._domainkey.dkim2.ccsend.com` | Valid Record Found |

## TXT Records (DMARC)

| Type | Host Name             | Value               | Status |
|------|-----------------------|---------------------|--------|
| TXT  | `_dmarc.mergelith.com` | `v=DMARC1; p=none;` | Valid Record Found |

---
*Last Updated: 2026-04-29*
