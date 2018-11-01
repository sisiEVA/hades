# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class MbDomain(models.Model):
    uuid = models.CharField(max_length=50)
    update_time = models.DateTimeField()
    ip = models.CharField(max_length=200)
    domain = models.CharField(max_length=200, blank=True, null=True)
    status = models.IntegerField()
    result = models.TextField()
    updated_on = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mb_domain'


class MbGithub(models.Model):
    vul_uuid = models.CharField(max_length=50)
    url = models.CharField(max_length=500)
    key = models.CharField(max_length=100)
    hash = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    isok = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'mb_github'


class MbHeishiIp(models.Model):
    uuid = models.CharField(max_length=50)
    create_time = models.DateTimeField()
    lanip = models.CharField(max_length=20)
    wanip = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'mb_heishi_ip'


class MbIp(models.Model):
    uuid = models.CharField(max_length=50)
    update_time = models.DateTimeField()
    ip = models.CharField(max_length=20)
    status = models.IntegerField()
    result = models.TextField()

    class Meta:
        managed = False
        db_table = 'mb_ip'


class MbJiraLeakData(models.Model):
    leakid = models.CharField(unique=True, max_length=50)
    leakname = models.CharField(max_length=200)
    leaktype = models.CharField(max_length=50)
    leaklevel = models.CharField(max_length=10)
    leakhandle = models.CharField(max_length=50)
    leakoperator = models.CharField(max_length=50)
    leakstatus = models.CharField(max_length=50)
    warnningtime = models.CharField(max_length=50)
    warnningyear = models.CharField(max_length=50, blank=True, null=True)
    warnningmonth = models.CharField(max_length=50, blank=True, null=True)
    warnningday = models.CharField(max_length=50, blank=True, null=True)
    updatetime = models.CharField(max_length=50)
    repairtime = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    leaksource = models.CharField(max_length=50)
    leakurl = models.CharField(max_length=200)
    flag = models.CharField(max_length=200)
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_jira_leak_data'


class MbLeftmenu(models.Model):
    title = models.CharField(max_length=25)
    icon = models.CharField(max_length=50)
    url = models.CharField(max_length=50)
    role = models.IntegerField()
    parent_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mb_leftmenu'


class MbMeasreport(models.Model):
    leak_name = models.CharField(max_length=200)
    leak_info = models.CharField(max_length=200)
    leak_bak = models.CharField(max_length=200, blank=True, null=True)
    leak_starttime = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_measreport'


class MbMeasure(models.Model):
    meas_id = models.IntegerField()
    meas_uuid = models.CharField(max_length=50)
    meas_reviewer = models.CharField(max_length=50, blank=True, null=True)
    meas_title = models.CharField(max_length=100)
    meas_depart = models.CharField(max_length=100, blank=True, null=True)
    meas_date = models.CharField(max_length=100, blank=True, null=True)
    meas_develop = models.CharField(max_length=100, blank=True, null=True)
    meas_product = models.CharField(max_length=100, blank=True, null=True)
    meas_testenter = models.CharField(max_length=50)
    meas_desc = models.TextField(blank=True, null=True)
    meas_sharepoint = models.CharField(max_length=50, blank=True, null=True)
    meas_file = models.CharField(max_length=300, blank=True, null=True)
    meas_status = models.CharField(max_length=50, blank=True, null=True)
    meas_report = models.CharField(max_length=50, blank=True, null=True)
    meas_tag = models.CharField(max_length=50, blank=True, null=True)
    vul_start_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_measure'


class MbNews(models.Model):
    vul_uuid = models.CharField(max_length=50)
    title = models.CharField(max_length=128)
    url = models.CharField(max_length=1024)
    tags = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    add_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_news'


class MbSecleak(models.Model):
    vul_id = models.IntegerField()
    vul_uuid = models.CharField(max_length=50)
    vul_jira = models.CharField(max_length=50, blank=True, null=True)
    vul_recipients = models.CharField(max_length=100, blank=True, null=True)
    vul_copypeople = models.CharField(max_length=100, blank=True, null=True)
    vul_subject = models.TextField(blank=True, null=True)
    vul_change_time = models.CharField(max_length=50)
    vul_title = models.CharField(max_length=50)
    vul_influence = models.CharField(max_length=50)
    vul_level = models.CharField(max_length=50)
    vul_time = models.CharField(max_length=50)
    vul_source = models.CharField(max_length=50)
    vul_interface = models.CharField(max_length=50)
    vul_type = models.CharField(max_length=50)
    vul_status = models.CharField(max_length=50)
    vul_department = models.CharField(max_length=50, blank=True, null=True)
    vul_introduce = models.TextField()
    vul_desc = models.TextField()
    vul_repair = models.CharField(max_length=1000)
    vul_file = models.TextField(blank=True, null=True)
    vul_measure = models.IntegerField()
    vul_measuuid = models.CharField(max_length=200, blank=True, null=True)
    vul_url = models.CharField(max_length=200)
    vul_start_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_secleak'


class MbTencentIp(models.Model):
    uuid = models.CharField(max_length=50)
    create_time = models.DateTimeField()
    lanip = models.CharField(max_length=20)
    wanip = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'mb_tencent_ip'


class MbUserinfo(models.Model):
    username = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50, blank=True, null=True)
    role = models.IntegerField()
    introduction = models.TextField(blank=True, null=True)
    ugroup = models.CharField(max_length=100)
    update_time = models.CharField(max_length=50)
    publish_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_userinfo'


class MbVpn(models.Model):
    uuid = models.CharField(max_length=50)
    update_time = models.DateTimeField()
    username = models.CharField(max_length=100)
    ip = models.CharField(max_length=20)
    time = models.CharField(max_length=20)
    status = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'mb_vpn'


class MbVulnews(models.Model):
    vul_uuid = models.CharField(max_length=50)
    title = models.CharField(max_length=10000)
    url = models.CharField(max_length=1024)
    tags = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    add_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'mb_vulnews'


class MbWeibo(models.Model):
    suser = models.CharField(max_length=200)
    sfrom = models.CharField(max_length=200)
    stitle = models.CharField(max_length=200)
    sabstract = models.CharField(max_length=20000)
    stime = models.CharField(max_length=200)
    surl = models.CharField(max_length=300)
    skey = models.CharField(max_length=200)
    shash = models.CharField(max_length=200)
    ssfrom = models.CharField(max_length=200)
    publish_time = models.DateTimeField()
    sensi = models.CharField(max_length=10)
    sensiword = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'mb_weibo'


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    publish_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'user'
