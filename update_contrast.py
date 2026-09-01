import re

files = [
    r'D:\Project\Magang\LandingPage\SatpolPPDamkar\satpolppdamkar.html',
    r'D:\Project\Magang\LandingPage\SetDaKo\setdako.html',
    r'D:\Project\Magang\LandingPage\SetDPRD\setdprd.html',
    r'D:\Project\Magang\LandingPage\Silungkang\silungkang.html'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # H1
    html = re.sub(
        r'style="text-shadow:0 2px 18px rgba\(0,0,0,0\.[0-9]+\);"',
        r'style="text-shadow: 0 4px 24px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,1);"',
        html
    )
    
    # Paragraph
    html = re.sub(
        r'<p class="text-perak text-base([^>]+)>',
        r'<p class="text-white font-medium text-base\1 style="text-shadow: 0 2px 12px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1);">',
        html,
        count=1
    )
    
    # Small text on top
    html = re.sub(
        r'(<div class="flex items-center gap-2\.5 font-mono text-xs tracking-\[0\.14em\] [^"]+ uppercase mb-3\.5")>',
        r'\1 style="text-shadow: 0 2px 8px rgba(0,0,0,1);">',
        html,
        count=1
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Updated: ' + file_path)
