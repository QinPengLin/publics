//mscms_api��Դ��
var jump = '';
if(jumpurl!='0'){
jump = '<a href="'+jumpurl+'" style="color:#FF0000;font-weight:bold">�ϴ��вɼ�����û����ɣ��Ƿ���Ųɼ�?</a>';
}
//��Դ�б�
var mscms_zylist = [
{
'name':'77��Դվ��api.77x6.com���������Դ(���貥����)��',
'apiurl':'aHR0cDovL2FwaS43N3g2LmNvbS9pbmMvYXBpLnBocA',
'ac':'77x6',
'rid':0,
'info':'��77��Դվapi.77x6.com�ṩ,����ͬ������~!'
},
{
'name':'��XiGua������Ӱ����Դ www.myzyzy.com',
'apiurl':'aHR0cDovL3d3dy5teXp5enkuY29tL2FwaS9tYXguYXNw',
'ac':'xgvod',
'rid':0,
'info':'������Ӱ����Դ www.myzyzy.com�ṩ,����ͬ������~!'
},
{
'name':'������Դ����www.jijizy.com��',
'apiurl':'aHR0cDovL2FwaS5qaWppenkuY29tL2luYy9hcGkuYXNw',
'ac':'jijizy',
'rid':0,
'info':'�ɼ�����Դ��www.jijizy.com�ṩ,����ͬ������~!'
},
{
'name':'������Դ��2��www.jjyyzy.com��',
'apiurl':'aHR0cDovL3d3dy5qanl5enkuY29tL2luYy9hcGkuYXNw',
'ac':'jjyyzy',
'rid':0,
'info':'�ɼ�����Դ��www.jjyyzy.com�ṩ,����ͬ������~!'
},
{
'name':'91��Դ����www.91zy.cc���������Դ��',
'apiurl':'aHR0cDovL3d3dy45MXp5LmNjL2luYy9hcGlfbWFjY21zLmFzcA',
'ac':'91zy',
'rid':0,
'info':'��91��Դ��www.91zy.cc�ṩ,����ͬ������~!'
}
]
var mscms_fsd = [
{
'name':'����˿����Դ������Ӱ��',
'apiurl':'aHR0cDovL3d3dy5mZW5zaXp5LmNvbS9hcGkvbWF4NC5hc3A',
'ac':'fensizy',
'rid':1,
'info':'��˿����Դ��www.fensizy.com���ṩ,����ͬ������~!'
},
{
'name':'����˿����Դ���ȷ�Ӱ��',
'apiurl':'aHR0cDovL3d3dy5mZW5zaXp5LmNvbS9hcGkvbWF4NC5hc3A',
'ac':'fensizy',
'rid':2,
'info':'��˿����Դ��www.fensizy.com���ṩ,����ͬ������~!'
},
{
'name':'����˿����Դ������Ӱ��',
'apiurl':'aHR0cDovL3d3dy5mZW5zaXp5LmNvbS9hcGkvbWF4NC5hc3A',
'ac':'fensizy',
'rid':3,
'info':'��˿����Դ��www.fensizy.com���ṩ,����ͬ������~!'
},
{
'name':'����˿����Դ��������Ƶ',
'apiurl':'aHR0cDovL3d3dy5mZW5zaXp5LmNvbS9hcGkvbWF4NC5hc3A',
'ac':'fensizy',
'rid':4,
'info':'��˿����Դ��www.fensizy.com���ṩ,����ͬ������~!'
},
{
'name':'����˿����Դ���ſ���Ƶ',
'apiurl':'aHR0cDovL3d3dy5mZW5zaXp5LmNvbS9hcGkvbWF4NC5hc3A',
'ac':'fensizy',
'rid':5,
'info':'��˿����Դ��www.fensizy.com���ṩ,����ͬ������~!'
}
]
var mscms_fgzy = [
{
'name':'��������Դ��ȫ����Դ',
'apiurl':'aHR0cDovL2lkLmR1b2R1b3R2LmNvbS9pbmMvYXBpLnBocA',
'ac':'fgzy',
'rid':0,
'info':'ID���߲��ź�ID������Դ,����ͬ������~!'
},
{
'name':'��������Դ���ſ���Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpeW91a3UucGhw',
'ac':'fgzy',
'rid':0,
'info':'�ſ����߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpdHVkb3UucGhw',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpcHB0di5waHA',
'ac':'fgzy',
'rid':0,
'info':'PPTV�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ���Ѻ���Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpc29odS5waHA',
'ac':'fgzy',
'rid':0,
'info':'�Ѻ����߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ����Ѷ��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpcXEucGhw',
'ac':'fgzy',
'rid':0,
'info':'��Ѷ���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpbGV0di5waHA',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpcWl5aS5waHA',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ����Ӱ����Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpbTE5MDUucGhw',
'ac':'fgzy',
'rid':0,
'info':'��Ӱ�����߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��â����Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpbWd0di5waHA',
'ac':'fgzy',
'rid':0,
'info':'â�����߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpZnVuc2hpb24ucGhw',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpd2FzdS5waHA',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ���쳲��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpa2Fua2FuLnBocA',
'ac':'fgzy',
'rid':0,
'info':'�쳲���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��CNTV��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpY250di5waHA',
'ac':'fgzy',
'rid':0,
'info':'CNTV���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ�������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpaWZlbmcucGhw',
'ac':'fgzy',
'rid':0,
'info':'������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpc2luYS5waHA',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��������Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpbWF4dHYucGhw',
'ac':'fgzy',
'rid':0,
'info':'�������߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ������������Ļ��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpYmlsaWJpbGkucGhw',
'ac':'fgzy',
'rid':0,
'info':'����������Ļ���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ��AcFun��Ļ��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpYWNmdW4ucGhw',
'ac':'fgzy',
'rid':0,
'info':'AcFun��Ļ���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ���Ƿ�Ӱ����Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpZmZoZC5waHA',
'ac':'fgzy',
'rid':0,
'info':'�Ƿ�Ӱ��,�Ƿ�Ӱ����Ҫ��װP2P������~!'
},
{
'name':'��������Դ������̨��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpeWlueXVldGFpLnBocA',
'ac':'fgzy',
'rid':0,
'info':'����̨���߲�����Դ,����ͬ������~!'
},
{
'name':'��������Դ������1080P��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpaGRiYW9mZW5nMTA4MFAucGhw',
'ac':'fgzy',
'rid':0,
'info':'����1080P��Դ,����ͬ������~!'
},
{
'name':'��������Դ������720P��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpaGRiYW9mZW5nNzIwUC5waHA',
'ac':'fgzy',
'rid':0,
'info':'����720P��Դ,����ͬ������~!'
},
{
'name':'��������Դ������480P��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpaGRiYW9mZW5nNDgwUC5waHA',
'ac':'fgzy',
'rid':0,
'info':'����480P��Դ,����ͬ������~!'
},
{
'name':'��������Դ������240P��Դ',
'apiurl':'aHR0cDovL2J0LmR1b2R1b3R2LmNvbS9pbmMvYXBpaGRiYW9mZW5nMjQwUC5waHA',
'ac':'fgzy',
'rid':0,
'info':'����240P��Դ,����ͬ������~!'
}
]



document.write('<table class="tablelist">');
document.write('<thead>');
document.write('<tr align="center">');
document.write('<th width="50">���</th>');
document.write('<th width="350">API��Դվ����</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="*">'+jump+'</th>');
document.write('</tr>');
document.write('</thead>');

document.write('<tbody>');

for(var i=0;i<mscms_zylist.length;i++){
var xu=(i<11) ? '0'+(i+1): (i+1);
document.write('<tr>');
document.write('<td>'+xu+'��</td>');
document.write('<td><a class="logs" href="?api='+mscms_zylist[i]['apiurl']+'&ac='+mscms_zylist[i]['ac']+'&rid='+mscms_zylist[i]['rid']+'">'+mscms_zylist[i]['name']+'</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_zylist[i]['apiurl']+'&ac='+mscms_zylist[i]['ac']+'&rid='+mscms_zylist[i]['rid']+'">����鿴</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_zylist[i]['apiurl']+'&ac='+mscms_zylist[i]['ac']+'&op=day&do=caiji&rid='+mscms_zylist[i]['rid']+'" style="color:red">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_zylist[i]['apiurl']+'&ac='+mscms_zylist[i]['ac']+'&op=week&do=caiji&rid='+mscms_zylist[i]['rid']+'" style="color:green">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_zylist[i]['apiurl']+'&ac='+mscms_zylist[i]['ac']+'&op=all&do=caiji&rid='+mscms_zylist[i]['rid']+'" style="color:#ff6600">�ɼ�ȫ��</a></td>');
document.write('<td>&nbsp;'+mscms_zylist[i]['info']+'</td>');
document.write('</tr>');
}

document.write('<thead>');
document.write('<tr align="center">');
document.write('<th width="50">���</th>');
document.write('<th width="350">��˿����Դ�б�</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="*">'+jump+'</th>');
document.write('</tr>');
document.write('</thead>');
for(var i=0;i<mscms_fsd.length;i++){
var xu=(i<11) ? '0'+(i+1): (i+1);
document.write('<tr>');
document.write('<td>'+xu+'��</td>');
document.write('<td><a class="logs" href="?api='+mscms_fsd[i]['apiurl']+'&ac='+mscms_fsd[i]['ac']+'&rid='+mscms_fsd[i]['rid']+'">'+mscms_fsd[i]['name']+'</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fsd[i]['apiurl']+'&ac='+mscms_fsd[i]['ac']+'&rid='+mscms_fsd[i]['rid']+'">����鿴</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fsd[i]['apiurl']+'&ac='+mscms_fsd[i]['ac']+'&op=day&do=caiji&rid='+mscms_fsd[i]['rid']+'" style="color:red">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fsd[i]['apiurl']+'&ac='+mscms_fsd[i]['ac']+'&op=week&do=caiji&rid='+mscms_fsd[i]['rid']+'" style="color:green">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fsd[i]['apiurl']+'&ac='+mscms_fsd[i]['ac']+'&op=all&do=caiji&rid='+mscms_fsd[i]['rid']+'" style="color:#ff6600">�ɼ�ȫ��</a></td>');
document.write('<td>&nbsp;'+mscms_fsd[i]['info']+'</td>');
document.write('</tr>');
}

document.write('<thead>');
document.write('<tr align="center">');
document.write('<th width="50">���</th>');
document.write('<th width="350">������Դ�б�</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="100">&nbsp;</th>');
document.write('<th width="*">'+jump+'</th>');
document.write('</tr>');
document.write('</thead>');
for(var i=0;i<mscms_fgzy.length;i++){
var xu=(i<11) ? '0'+(i+1): (i+1);
document.write('<tr>');
document.write('<td>'+xu+'��</td>');
document.write('<td><a class="logs" href="?api='+mscms_fgzy[i]['apiurl']+'&ac='+mscms_fgzy[i]['ac']+'&rid='+mscms_fgzy[i]['rid']+'">'+mscms_fgzy[i]['name']+'</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fgzy[i]['apiurl']+'&ac='+mscms_fgzy[i]['ac']+'&rid='+mscms_fgzy[i]['rid']+'">����鿴</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fgzy[i]['apiurl']+'&ac='+mscms_fgzy[i]['ac']+'&op=day&do=caiji&rid='+mscms_fgzy[i]['rid']+'" style="color:red">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fgzy[i]['apiurl']+'&ac='+mscms_fgzy[i]['ac']+'&op=week&do=caiji&rid='+mscms_fgzy[i]['rid']+'" style="color:green">�ɼ�����</a></td>');
document.write('<td><a class="logs" href="?api='+mscms_fgzy[i]['apiurl']+'&ac='+mscms_fgzy[i]['ac']+'&op=all&do=caiji&rid='+mscms_fgzy[i]['rid']+'" style="color:#ff6600">�ɼ�ȫ��</a></td>');
document.write('<td>&nbsp;'+mscms_fgzy[i]['info']+'</td>');
document.write('</tr>');
}


document.write('</table>');


